import { describe, it, expect, vi } from "vitest";
import { generateTutorReply, MinimalGoal, MinimalMilestone } from "./llmService";

vi.mock("../lib/promptTemplates", () => ({
  buildTutorPrompt: () => ({ systemPrompt: "sys", userPrompt: "usr" }),
}));

vi.mock("./llmProviders/openrouterProvider", () => ({
  generateReply: vi.fn(async () => ({ text: "{\"replyText\":\"structured ok\",\"foo\":123}", raw: { ok: true }, tokensUsed: 42 })),
}));

describe("generateTutorReply", () => {
  it("parses JSON reply and returns structured", async () => {
  const oldKey = process.env.OPENROUTER_API_KEY;
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
    if (oldKey) process.env.OPENROUTER_API_KEY = oldKey;
  });
});
