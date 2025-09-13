import type { MinimalGoal, MinimalMilestone, TutorMessage, TutorMode } from "../types/tutor";

export function buildTutorPrompt(args: {
  goal?: MinimalGoal;
  milestone?: MinimalMilestone;
  recentMessages: TutorMessage[];
  userProfile?: Record<string, any>;
  mode?: TutorMode;
}): { systemPrompt: string; userPrompt: string } {
  const { goal, milestone, recentMessages, userProfile, mode } = args;

  const systemPrompt = [
    "You are an expert tutor. Keep replies concise.",
    "Use the provided goal and current milestone as context.",
    "If user question is ambiguous, ask one clarifying question.",
    "Provide a short explanation and 2 actionable next steps.",
    "If asked to apply theory to a use-case, mention the user's goal and include an example.",
    mode ? `Mode: ${mode}` : undefined,
  ].filter(Boolean).join("\n");

  const recentUser = recentMessages?.filter(m => m.role === "user").slice(-1)[0]?.content ?? "";
  const g = goal ? `Goal: ${goal.title}` : "";
  const m = milestone ? `Milestone: ${milestone.title}` : "";
  const profile = userProfile ? `User profile hints: ${JSON.stringify(userProfile).slice(0, 400)}` : "";

  const userPrompt = [
    g,
    m,
    profile,
    "Recent question:",
    recentUser,
  ].filter(Boolean).join("\n");

  // Example (for providers)
  // Example:
  // System: You are an expert tutor ... Provide short explanation and 2 steps.
  // User: Goal: Learn React\nMilestone: Hooks Basics\nRecent question: "Explain useState vs useRef"
  // Assistant: "useState triggers re-render when updated; useRef does not. Next steps: 1) Refactor a component using useState to useRef where re-render isn't needed. 2) Build a small counter with both and compare."

  return { systemPrompt, userPrompt };
}
