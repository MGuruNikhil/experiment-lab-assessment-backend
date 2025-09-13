"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const llmService_1 = require("../llmService");
vitest_1.vi.mock("../lib/promptTemplates", () => ({
    buildTutorPrompt: () => ({ systemPrompt: "sys", userPrompt: "usr" }),
}));
vitest_1.vi.mock("../llmProviders/heuristicProvider", () => ({
    generateReply: vitest_1.vi.fn(async () => ({ text: "Here’s a concise tip.\nNext steps:\n1) Do X\n2) Do Y", raw: { heuristic: true } })),
}));
vitest_1.vi.mock("../llmProviders/openrouterProvider", () => ({
    generateReply: vitest_1.vi.fn(async () => ({ text: "{\"replyText\":\"structured ok\",\"foo\":123}", raw: { ok: true }, tokensUsed: 42 })),
}));
(0, vitest_1.describe)("generateTutorReply", () => {
    (0, vitest_1.it)("falls back to heuristic when no OPENROUTER_API_KEY", async () => {
        const oldProv = process.env.LLM_PROVIDER;
        const oldKey = process.env.OPENROUTER_API_KEY;
        process.env.LLM_PROVIDER = "openrouter";
        delete process.env.OPENROUTER_API_KEY;
        const res = await (0, llmService_1.generateTutorReply)({
            sessionId: "s1",
            goal: { id: "g", title: "G" },
            milestone: { id: "m", title: "M" },
            messages: [{ role: "user", content: "explain" }],
        });
        (0, vitest_1.expect)(res.replyText).toMatch(/concise tip|Next steps/i);
        // restore
        process.env.LLM_PROVIDER = oldProv;
        if (oldKey)
            process.env.OPENROUTER_API_KEY = oldKey;
    });
    (0, vitest_1.it)("parses JSON reply and returns structured", async () => {
        const oldProv = process.env.LLM_PROVIDER;
        const oldKey = process.env.OPENROUTER_API_KEY;
        process.env.LLM_PROVIDER = "openrouter";
        process.env.OPENROUTER_API_KEY = "test";
        const res = await (0, llmService_1.generateTutorReply)({
            sessionId: "s2",
            goal: { id: "g", title: "G" },
            milestone: { id: "m", title: "M" },
            messages: [{ role: "user", content: "anything" }],
        });
        (0, vitest_1.expect)(res.structured).toBeTruthy();
        (0, vitest_1.expect)(res.replyText).toBe("structured ok");
        (0, vitest_1.expect)(res.providerMeta?.provider).toBe("openrouter");
        (0, vitest_1.expect)(res.providerMeta?.tokensUsed).toBe(42);
        // restore
        process.env.LLM_PROVIDER = oldProv;
        if (oldKey)
            process.env.OPENROUTER_API_KEY = oldKey;
    });
});
//# sourceMappingURL=llmService.tspec.js.map