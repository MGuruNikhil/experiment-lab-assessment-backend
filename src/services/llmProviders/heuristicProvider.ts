export type GenerateReplyArgs = {
  systemPrompt: string;
  userPrompt: string;
  messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
  goal?: { title?: string } | null;
  milestone?: { title?: string } | null;
  mode?: string;
};

export type GenerateReplyResult = { text: string; raw?: any; tokensUsed?: number };

export async function generateReply(args: GenerateReplyArgs): Promise<GenerateReplyResult> {
  const lastUser = [...(args.messages || [])].reverse().find((m) => m.role === "user")?.content || args.userPrompt || "";
  const mTitle = args.milestone?.title || "this milestone";
  const gTitle = args.goal?.title || "your goal";

  let text = "";
  const lower = lastUser.toLowerCase();
  if (lower.includes("explain")) {
    text = `Short explanation about ${mTitle}: Focus on the key idea in 2-3 sentences.\nNext steps:\n1) Read a concise summary and note questions.\n2) Try one small exercise related to ${gTitle}.`;
  } else if (lower.includes("example") || lower.includes("apply")) {
    text = `Applying to ${gTitle}: Consider a simple scenario and solve it using the current concept from ${mTitle}.\nNext steps:\n1) Draft an example.\n2) Validate it against your milestone goals.`;
  } else {
    text = `Here’s a concise tip for ${mTitle}.\nNext steps:\n1) Do one small action today.\n2) Plan the next check-in.`;
  }
  return { text, raw: { heuristic: true } };
}
