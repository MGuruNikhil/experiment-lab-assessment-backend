import { describe, it, expect, vi } from "vitest";
import { generateTutorReply, MinimalGoal, MinimalMilestone } from "../llmService";

vi.mock("../lib/promptTemplates", () => ({
  buildTutorPrompt: () => ({ systemPrompt: "sys", userPrompt: "usr" }),
}));

vi.mock("../llmProviders/heuristicProvider", () => ({
  generateReply: vi.fn(async () => ({ text: "Here’s a concise tip.\nNext steps:\n1) Do X\n2) Do Y", raw: { heuristic: true } })),
}));

vi.mock("../llmProviders/openrouterProvider", () => ({
  generateReply: vi.fn(async () => ({ text: "{\"replyText\":\"structured ok\",\"foo\":123}", raw: { ok: true }, tokensUsed: 42 })),
}));

describe("generateTutorReply", () => {
  it("falls back to heuristic when no OPENROUTER_API_KEY", async () => {
    const oldProv = process.env.LLM_PROVIDER;
    const oldKey = process.env.OPENROUTER_API_KEY;
    process.env.LLM_PROVIDER = "openrouter";
    delete process.env.OPENROUTER_API_KEY;

    const res = await generateTutorReply({
      sessionId: "s1",
      goal: { id: "g", title: "G" } as MinimalGoal,
      milestone: { id: "m", title: "M" } as MinimalMilestone,
      messages: [{ role: "user", content: "explain" }],
    });

    expect(res.replyText).toMatch(/concise tip|Next steps/i);

    // restore
    process.env.LLM_PROVIDER = oldProv;
    if (oldKey) process.env.OPENROUTER_API_KEY = oldKey;
  });

  it("parses JSON reply and returns structured", async () => {
    const oldProv = process.env.LLM_PROVIDER;
    const oldKey = process.env.OPENROUTER_API_KEY;
    process.env.LLM_PROVIDER = "openrouter";
    process.env.OPENROUTER_API_KEY = "test";

    const res = await generateTutorReply({
      sessionId: "s2",
      goal: { id: "g", title: "G" } as MinimalGoal,
      milestone: { id: "m", title: "M" } as MinimalMilestone,
      messages: [{ role: "user", content: "anything" }],
    });

    expect(res.structured).toBeTruthy();
    expect(res.replyText).toBe("structured ok");
    expect(res.providerMeta?.provider).toBe("openrouter");
    expect(res.providerMeta?.tokensUsed).toBe(42);

    // restore
    process.env.LLM_PROVIDER = oldProv;
    if (oldKey) process.env.OPENROUTER_API_KEY = oldKey;
  });
});
