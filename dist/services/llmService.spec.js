"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const llmService_1 = require("./llmService");
vitest_1.vi.mock("../lib/promptTemplates", () => ({
    buildTutorPrompt: () => ({ systemPrompt: "sys", userPrompt: "usr" }),
}));
vitest_1.vi.mock("./llmProviders/openrouterProvider", () => ({
    generateReply: vitest_1.vi.fn(async () => ({ text: "{\"replyText\":\"structured ok\",\"foo\":123}", raw: { ok: true }, tokensUsed: 42 })),
}));
(0, vitest_1.describe)("generateTutorReply", () => {
    (0, vitest_1.it)("parses JSON reply and returns structured", async () => {
        const oldKey = process.env.OPENROUTER_API_KEY;
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
        if (oldKey)
            process.env.OPENROUTER_API_KEY = oldKey;
    });
});
//# sourceMappingURL=llmService.spec.js.map