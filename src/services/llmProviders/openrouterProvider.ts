export type GenerateReplyArgs = {
  systemPrompt: string;
  userPrompt: string;
  messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
  goal?: any;
  milestone?: any;
  mode?: string | undefined;
};

export type GenerateReplyResult = {
  text: string;
  raw?: any;
  tokensUsed?: number;
};

// Try using @openrouter/ai-sdk-provider + AI SDK first; fall back to HTTP fetch on any error
export async function generateReply(args: GenerateReplyArgs): Promise<GenerateReplyResult> {
  const { systemPrompt, userPrompt, messages } = args;

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    // Without key, signal a failure so caller can fallback (or previous layer already picked heuristic)
    return { text: "Heuristic fallback: no OpenRouter API key configured." };
  }

  // Build full message array: include system + recent context + current user prompt
  const chatMessages: Array<{ role: string; content: string }> = [];
  if (systemPrompt) chatMessages.push({ role: "system", content: systemPrompt });
  for (const m of messages || []) {
    if (!m?.role || !m?.content) continue;
    chatMessages.push({ role: m.role, content: m.content });
  }
  if (userPrompt) chatMessages.push({ role: "user", content: userPrompt });

  // Prefer AI SDK provider if available
  try {
    const [{ createOpenRouter }, { generateText }] = await Promise.all([
      import("@openrouter/ai-sdk-provider").catch(() => null as any),
      import("ai").catch(() => null as any),
    ]);
    if (createOpenRouter && generateText) {
      const openrouter = createOpenRouter({ apiKey });
      const modelId = process.env.OPENROUTER_MODEL || "openrouter/auto";
      const model = openrouter(modelId, {
        usage: { include: true },
      });
      const result: any = await generateText({
        model,
        messages: chatMessages as any,
        temperature: 0.4 as any,
      });
      const textOut = result?.text ?? "";
      const tokensUsed = result?.providerMetadata?.openrouter?.usage?.totalTokens
        ?? result?.usage?.totalTokens;
      return { text: String(textOut), raw: result, tokensUsed };
    }
  } catch (e) {
    // swallow and fall through to HTTP
  }

  // HTTP fallback
  const url = "https://openrouter.ai/api/v1/chat/completions";
  const model = process.env.OPENROUTER_MODEL || "openrouter/auto";
  const headers: Record<string, string> = {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  const referer = process.env.OPENROUTER_REFERER || process.env.FRONTEND_URL || process.env.OPENROUTER_APP_NAME;
  if (referer) headers["HTTP-Referer"] = referer;
  if (process.env.OPENROUTER_APP_NAME) headers["X-Title"] = process.env.OPENROUTER_APP_NAME;

  const body = {
    model,
    messages: chatMessages,
    temperature: 0.4,
  };

  const resp = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
  const json: any = await resp.json().catch(async () => ({ error: await resp.text().catch(() => "") }));
  if (!resp.ok) {
    const errMsg = typeof (json as any)?.error === "string" ? (json as any).error : JSON.stringify(json);
    throw new Error(`OpenRouter error ${resp.status}: ${errMsg}`);
  }
  const textOut = json?.choices?.[0]?.message?.content ?? "";
  // tokensUsed may not be present; try to infer
  const tokensUsed = json?.usage?.total_tokens ?? json?.usage?.prompt_tokens + json?.usage?.completion_tokens;
  return { text: typeof textOut === "string" ? textOut : JSON.stringify(textOut), raw: json, tokensUsed };
}
