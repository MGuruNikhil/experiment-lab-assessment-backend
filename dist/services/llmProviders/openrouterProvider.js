"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReply = generateReply;
// Try using @openrouter/ai-sdk-provider + AI SDK first; fall back to HTTP fetch on any error
async function generateReply(args) {
    const { systemPrompt, userPrompt, messages } = args;
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        // Without key, signal a failure so caller can fallback (or previous layer already picked heuristic)
        return { text: "Heuristic fallback: no OpenRouter API key configured." };
    }
    // Build full message array: include system + recent context + current user prompt
    const chatMessages = [];
    if (systemPrompt)
        chatMessages.push({ role: "system", content: systemPrompt });
    for (const m of messages || []) {
        if (!m?.role || !m?.content)
            continue;
        chatMessages.push({ role: m.role, content: m.content });
    }
    if (userPrompt)
        chatMessages.push({ role: "user", content: userPrompt });
    // Prefer AI SDK provider if available
    try {
        const [{ createOpenRouter }, { generateText }] = await Promise.all([
            Promise.resolve().then(() => __importStar(require("@openrouter/ai-sdk-provider"))).catch(() => null),
            Promise.resolve().then(() => __importStar(require("ai"))).catch(() => null),
        ]);
        if (createOpenRouter && generateText) {
            const openrouter = createOpenRouter({ apiKey });
            const modelId = process.env.OPENROUTER_MODEL || "openrouter/auto";
            const model = openrouter(modelId, {
                usage: { include: true },
            });
            const result = await generateText({
                model,
                messages: chatMessages,
                temperature: 0.4,
            });
            const textOut = result?.text ?? "";
            const tokensUsed = result?.providerMetadata?.openrouter?.usage?.totalTokens
                ?? result?.usage?.totalTokens;
            return { text: String(textOut), raw: result, tokensUsed };
        }
    }
    catch (e) {
        // swallow and fall through to HTTP
    }
    // HTTP fallback
    const url = "https://openrouter.ai/api/v1/chat/completions";
    const model = process.env.OPENROUTER_MODEL || "openrouter/auto";
    const headers = {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
    };
    const referer = process.env.OPENROUTER_REFERER || process.env.FRONTEND_URL || process.env.OPENROUTER_APP_NAME;
    if (referer)
        headers["HTTP-Referer"] = referer;
    if (process.env.OPENROUTER_APP_NAME)
        headers["X-Title"] = process.env.OPENROUTER_APP_NAME;
    const body = {
        model,
        messages: chatMessages,
        temperature: 0.4,
    };
    const resp = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
    const json = await resp.json().catch(async () => ({ error: await resp.text().catch(() => "") }));
    if (!resp.ok) {
        const errMsg = typeof json?.error === "string" ? json.error : JSON.stringify(json);
        throw new Error(`OpenRouter error ${resp.status}: ${errMsg}`);
    }
    const textOut = json?.choices?.[0]?.message?.content ?? "";
    // tokensUsed may not be present; try to infer
    const tokensUsed = json?.usage?.total_tokens ?? json?.usage?.prompt_tokens + json?.usage?.completion_tokens;
    return { text: typeof textOut === "string" ? textOut : JSON.stringify(textOut), raw: json, tokensUsed };
}
//# sourceMappingURL=openrouterProvider.js.map