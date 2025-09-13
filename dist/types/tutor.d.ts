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
export type { MinimalGoal as GoalShape, MinimalMilestone as MilestoneShape };
//# sourceMappingURL=tutor.d.ts.map