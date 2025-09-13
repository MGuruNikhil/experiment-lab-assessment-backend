import { z } from "zod";
import { buildTutorPrompt } from "../lib/promptTemplates";
import { OpenRouter as OpenRouterProvider } from "./llmProviders";

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

export type MinimalMilestone = {
  id: string;
  title: string;
  description?: string | null;
};

export type TutorMessage = {
  role: "user" | "assistant" | "system";
  content: string;
  createdAt?: string | Date;
};

export type TutorMode = string | undefined;

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

  const modelId = process.env.OPENROUTER_MODEL || "openrouter/auto";

  // Try AI SDK first
  try {
    const [{ createOpenRouter }, { generateText }] = await Promise.all([
      import("@openrouter/ai-sdk-provider").catch(() => null as any),
      import("ai").catch(() => null as any),
    ]);
    if (createOpenRouter && generateText) {
  console.log("[llm][journey] provider=ai-sdk path selected", { model: modelId });
      const openrouter = createOpenRouter({ apiKey });
      const model = openrouter(modelId, {
        usage: { include: true },
        extraBody: { response_format: { type: "json_object" } },
      } as any);
      const result: any = await generateText({
        model,
        messages: [
          { role: "system", content: "You output strictly valid JSON only. No markdown, no explanations." },
          { role: "user", content: prompt },
        ] as any,
        temperature: 0.2 as any,
      });
      const rawText = String(result?.text ?? "");
      const maybe = extractFirstJsonObject(rawText);
      let parsed: LLMJourney | undefined;
      if (maybe) {
        try {
          parsed = LLMJourneySchema.parse(JSON.parse(maybe));
        } catch {}
      } else {
        try {
          parsed = LLMJourneySchema.parse(JSON.parse(rawText));
        } catch {}
      }
      return parsed ? { rawText, parsed } : { rawText };
    }
  } catch (e) {
    // fall through to HTTP
    console.warn("[llm] AI SDK path failed, falling back to HTTP", { err: (e as any)?.message || String(e) });
  }

  // HTTP fallback (original implementation)
  console.log("[llm][journey] provider=http fallback path selected", { model: modelId });
  const url = "https://openrouter.ai/api/v1/chat/completions";
  const headers: Record<string, string> = {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  const referer = process.env.OPENROUTER_REFERER || process.env.FRONTEND_URL || process.env.OPENROUTER_APP_NAME;
  if (referer) headers["HTTP-Referer"] = referer;
  if (process.env.OPENROUTER_APP_NAME) headers["X-Title"] = process.env.OPENROUTER_APP_NAME;

  const body = {
    model: modelId,
    messages: [
      { role: "system", content: "You output strictly valid JSON only. No markdown, no explanations." },
      { role: "user", content: prompt },
    ],
    response_format: { type: "json_object" },
    temperature: 0.2,
  } as any;

  console.log("[llm] openrouter.request", {
    url,
    model: modelId,
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
  const json: any = await resp.json();
  let content: any = json?.choices?.[0]?.message?.content;
  if (Array.isArray(content)) {
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
        const candidate2 = JSON.parse(rawText);
        parsed = LLMJourneySchema.parse(candidate2);
      } catch (zerr: any) {
        console.error("[llm] openrouter.parse.error", { message: String(zerr?.message || zerr) });
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

// --- Tutor generation service (pluggable provider) ---

type ProviderGenerateReplyResult = {
  text: string; // final assistant text (non-streaming)
  raw?: any; // raw provider response for logging/debug
  tokensUsed?: number;
};

function sanitizeForPrompt(s: string | null | undefined): string {
  if (!s) return "";
  // Strip emails as required (keep simple and deterministic)
  return String(s).replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[email]");
}

function maybeParseJson(text: string): { structured?: any; replyText: string } {
  const t = (text ?? "").trim();
  if (t.startsWith("{") || t.startsWith("[")) {
    try {
      const parsed = JSON.parse(t);
      // If the JSON has an explicit reply field, prefer it
      const replyText = typeof parsed?.replyText === "string" ? parsed.replyText : text;
      return { structured: parsed, replyText };
    } catch {
      // fallthrough to plain text
    }
  }
  return { replyText: text };
}

export async function generateTutorReply(args: {
  sessionId: string;
  goal?: MinimalGoal | null;
  milestone?: MinimalMilestone | null;
  messages: TutorMessage[];
  userContext?: Record<string, any> | null;
  mode?: TutorMode;
}): Promise<{ replyText: string; structured?: any; providerMeta?: any }> {
  const { sessionId, goal, milestone, messages, userContext, mode } = args;

  // Build prompts (ensure milestone.description is sanitized at minimum)
  const sanitizedMilestone: MinimalMilestone | null | undefined = milestone
    ? { ...milestone, description: sanitizeForPrompt(milestone.description) }
    : milestone;
  const sanitizedGoal: MinimalGoal | null | undefined = goal
    ? { ...goal, description: sanitizeForPrompt(goal.description) }
    : goal;

  const promptArgs: any = {
    recentMessages: messages?.slice(-8) ?? [],
    userProfile: userContext ?? undefined,
    mode: mode ?? undefined,
  };
  if (sanitizedGoal) promptArgs.goal = sanitizedGoal;
  if (sanitizedMilestone) promptArgs.milestone = sanitizedMilestone;
  const { systemPrompt, userPrompt } = buildTutorPrompt(promptArgs);

  let provResult: ProviderGenerateReplyResult;

  const baseArgs: any = {
    systemPrompt,
    userPrompt,
    messages,
  };
  if (sanitizedGoal) baseArgs.goal = sanitizedGoal;
  if (sanitizedMilestone) baseArgs.milestone = sanitizedMilestone;
  if (mode) baseArgs.mode = mode;

  // Always use OpenRouter provider (single provider setup)
  provResult = await OpenRouterProvider.generateReply(baseArgs);

  const text = typeof provResult?.text === "string" ? provResult.text : String(provResult?.text);
  const { structured, replyText } = maybeParseJson(text);
  const providerMeta = {
  provider: "openrouter",
    tokensUsed: provResult?.tokensUsed,
    raw: provResult?.raw,
    sessionId,
  };
  return { replyText, structured, providerMeta };
}
