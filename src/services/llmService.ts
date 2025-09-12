import { z } from "zod";

// Zod schema for the expected LLM output
export const LLMJourneySchema = z.object({
  journeyTitle: z.string().min(1),
  durationWeeks: z.number().int().positive(),
  chunking: z.enum(["weekly", "biweekly"]),
  milestones: z.array(z.object({
    title: z.string().min(1),
    description: z.string().optional().default(""),
    startWeek: z.number().int().positive(),
    endWeek: z.number().int().positive(),
    estimatedHours: z.number().int().positive().optional().default(10),
    // Dependencies are indices referencing other milestones in this array
    dependencies: z.array(z.number().int().nonnegative()).optional().default([]),
  })).min(1),
});

export type LLMJourney = z.infer<typeof LLMJourneySchema>;

export type ProviderOptions = {
  durationWeeks?: number;
  chunking?: "weekly" | "biweekly";
};

export type MinimalGoal = {
  id: string;
  title: string;
  description?: string | null;
  complexity?: number | null;
  suggestedWeeks?: number | null;
  chunking?: string | null;
};

function scrubPII(text: string | null | undefined): string {
  // Basic, commentable PII scrubbing. Intent is to avoid sending raw emails/phones/urls.
  // NOTE: This is heuristic; for stricter needs use a proper PII redaction library or DLP.
  if (!text) return "";
  let out = text;
  // Emails
  out = out.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[email]");
  // Phone numbers (very rough)
  out = out.replace(/\+?\d[\d\s\-()]{7,}\d/g, "[phone]");
  // URLs
  out = out.replace(/https?:\/\/[^\s)]+/g, "[url]");
  // Excessive numbers (IDs)
  out = out.replace(/\b\d{6,}\b/g, "[number]");
  return out;
}

function buildPrompt(goal: MinimalGoal, options?: ProviderOptions): string {
  const sanitizedDescription = scrubPII(goal.description);
  const chunking = options?.chunking ?? (goal.chunking === "biweekly" ? "biweekly" : "weekly");
  const duration = options?.durationWeeks ?? goal.suggestedWeeks ?? (goal.complexity && goal.complexity <= 4 ? 6 : goal.complexity && goal.complexity <= 7 ? 12 : 24);
  return `You are a planning assistant that creates a learning or execution journey broken into milestones.
Respond ONLY with minified JSON that strictly matches this schema (no extra commentary, code fences, or markdown):
{
  "journeyTitle": string,
  "durationWeeks": int,
  "chunking": "weekly"|"biweekly",
  "milestones": [ { "title": string, "description": string, "startWeek": int, "endWeek": int, "estimatedHours": int, "dependencies": number[] } ]
}

Constraints:
- durationWeeks = ${duration}
- chunking = "${chunking}"
- Ensure milestones cover the full duration in ${chunking} chunks; startWeek and endWeek are 1-indexed inclusive.
- dependencies use 0-based indices referencing earlier milestones only; ensure no cycles.

Goal Title: ${goal.title}
Goal Description (PII-scrubbed): ${sanitizedDescription || "(none)"}
`; 
}

function extractFirstJsonObject(text: string): string | null {
  // Try to find the first {...} balanced block.
  const start = text.indexOf("{");
  if (start === -1) return null;
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return text.slice(start, i + 1);
    }
  }
  return null;
}

async function openrouterProvider(prompt: string): Promise<{ rawText: string; parsed?: LLMJourney }>{
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY not configured");
  }

  const url = "https://openrouter.ai/api/v1/chat/completions";
  const model = process.env.OPENROUTER_MODEL || "openrouter/auto";
  const headers: Record<string, string> = {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  // Optional but recommended per OpenRouter docs
  const referer = process.env.OPENROUTER_REFERER || process.env.FRONTEND_URL || process.env.OPENROUTER_APP_NAME;
  if (referer) headers["HTTP-Referer"] = referer;
  if (process.env.OPENROUTER_APP_NAME) headers["X-Title"] = process.env.OPENROUTER_APP_NAME;

  const body = {
    model,
    messages: [
      { role: "system", content: "You output strictly valid JSON only. No markdown, no explanations." },
      { role: "user", content: prompt },
    ],
    // Hint JSON mode if model supports it
    response_format: { type: "json_object" },
    temperature: 0.2,
  } as any;

  // Debug preflight
  console.log("[llm] openrouter.request", {
    url,
    model,
    headers: { hasAuth: Boolean(headers["Authorization"]), contentType: headers["Content-Type"], referer: headers["HTTP-Referer"], xTitle: headers["X-Title"] },
    promptLen: prompt?.length ?? 0,
  });

  const resp = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
  const contentType = resp.headers.get("content-type") || "";
  console.log("[llm] openrouter.response.meta", { status: resp.status, ok: resp.ok, contentType });
  if (!resp.ok) {
    const errText = await resp.text().catch(() => "");
    console.error("[llm] openrouter.response.error", { status: resp.status, body: errText?.slice(0, 500) });
    throw new Error(`OpenRouter error ${resp.status}: ${errText}`);
  }
  const json = await resp.json();
  // OpenRouter may return content as string or array of parts
  let content: any = json?.choices?.[0]?.message?.content;
  if (Array.isArray(content)) {
    // If array of parts, join only text parts
    const parts = content.map((p: any) => (typeof p?.text === "string" ? p.text : (typeof p === "string" ? p : "")));
    content = parts.join("\n");
  }
  const rawText: string = typeof content === "string" ? content : JSON.stringify(content ?? "");
  console.log("[llm] openrouter.response.rawSnippet", rawText.slice(0, 400));
  const maybe = extractFirstJsonObject(rawText);
  let parsed: LLMJourney | undefined;
  if (maybe) {
    try {
      const candidate = JSON.parse(maybe);
      parsed = LLMJourneySchema.parse(candidate);
    } catch {
      try {
        // If entire content is already JSON, try parse directly
        const candidate2 = JSON.parse(rawText);
        parsed = LLMJourneySchema.parse(candidate2);
      } catch (zerr: any) {
        console.error("[llm] openrouter.parse.error", { message: String(zerr?.message || zerr) });
        // leave parsed undefined; caller will handle
      }
    }
  }
  const result: { rawText: string; parsed?: LLMJourney } = { rawText };
  if (parsed) result.parsed = parsed;
  console.log("[llm] openrouter.result", { hasParsed: Boolean(parsed), rawLen: rawText.length });
  return result;
}

export async function generateJourneyWithLLM(goal: MinimalGoal, options?: ProviderOptions): Promise<{ parsed?: LLMJourney; rawText: string }>{
  const prompt = buildPrompt(goal, options);
  // If @openrouter/ai-sdk-provider is installed, it can be used here.
  // We default to direct HTTP provider to avoid extra deps.
  return openrouterProvider(prompt);
}
