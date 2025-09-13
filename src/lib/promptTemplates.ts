import type { MinimalGoal, MinimalMilestone, TutorMessage, TutorMode } from "../types/tutor";

/*
 System: You are an expert tutor. Use provided goal and milestone. Keep replies short and actionable. Provide an explanation in simple terms, 2-3 example applications, and 2 next steps the learner can take. If user's question is ambiguous, ask one clarifying question. Output must be plain text for the chat UI. Optional: append JSON block for practice problems if asked.
*/

export function buildTutorPrompt(args: {
  goal?: MinimalGoal;
  milestone?: MinimalMilestone;
  recentMessages: TutorMessage[];
  userProfile?: Record<string, any>;
  mode?: TutorMode;
  maxMessages?: number;
}): { systemPrompt: string; userPrompt: string } {
  const { goal, milestone, recentMessages, userProfile, mode } = args;
  const maxMessages = typeof args.maxMessages === "number" && args.maxMessages > 0 ? args.maxMessages : 8;

  // --- System prompt: tutor behavior contract ---
  const lines: string[] = [];
  lines.push(
    "You are an expert tutor. Use the provided goal and current milestone as hard context.",
    "Keep replies short and actionable (aim for ~6-10 sentences).",
    "Explain theory concisely as 2-4 bullet points.",
    "Provide exactly 2 actionable next steps the learner can take.",
    "Ask one clarifying question only if necessary.",
    "If the user asks to apply to a use-case, include a short example tailored to the user's goal.",
    "Respect the current milestone and avoid deviating beyond that scope unless you explicitly say you're going beyond it.",
    "Output must be plain text for the chat UI."
  );
  if (mode) lines.push(`Mode: ${mode}`);
  const systemPrompt = lines.join("\n");

  // --- User prompt: contextual block ---
  const gTitle = goal?.title?.trim();
  const mTitle = milestone?.title?.trim();
  const mDesc = milestone?.description?.trim();

  // Truncate history to last N; if truncated, note it
  const hasOverflow = (recentMessages?.length || 0) > maxMessages;
  const trimmed = (recentMessages || []).slice(-maxMessages);

  // Format recent messages in alternating speaker format (skip system messages for brevity)
  const transcript = trimmed
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: "${String(m.content || "").trim()}"`)
    .join("\n");

  let profileLine = "";
  if (userProfile && Object.keys(userProfile).length > 0) {
    // keep it short if very large
    const json = JSON.stringify(userProfile);
    profileLine = `Learner Profile: ${json.length > 600 ? json.slice(0, 600) + "…" : json}`;
  }

  const userPromptParts: string[] = [];
  if (gTitle) userPromptParts.push(`Goal: ${gTitle}`);
  if (mTitle) userPromptParts.push(`Milestone: ${mTitle}`);
  if (mDesc) userPromptParts.push(`Milestone Description: ${mDesc}`);
  if (profileLine) userPromptParts.push(profileLine);
  userPromptParts.push(
    hasOverflow
      ? "Conversation (older history omitted for brevity):"
      : "Conversation:",
  );
  if (transcript) userPromptParts.push(transcript);

  const userPrompt = userPromptParts.join("\n");

  return { systemPrompt, userPrompt };
}
