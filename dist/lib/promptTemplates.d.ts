import type { MinimalGoal, MinimalMilestone, TutorMessage, TutorMode } from "../types/tutor";
export declare function buildTutorPrompt(args: {
    goal?: MinimalGoal;
    milestone?: MinimalMilestone;
    recentMessages: TutorMessage[];
    userProfile?: Record<string, any>;
    mode?: TutorMode;
    maxMessages?: number;
}): {
    systemPrompt: string;
    userPrompt: string;
};
//# sourceMappingURL=promptTemplates.d.ts.map