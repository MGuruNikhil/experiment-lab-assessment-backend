export declare function getOverview(userId: string): Promise<{
    totalGoals: any;
    completedGoals: any;
    avgCompletionPercent: number;
    activeGoals: number;
    learningVelocityPerWeek: number;
    totalTutorSessions: any;
    avgSessionLengthMinutes: number;
    goalsTimeseries: {
        weekStart: string;
        createdCount: number | undefined;
        completedCount: number | undefined;
    }[];
}>;
export declare function getGoalDetails(userId: string, goalId: string): Promise<{
    goalId: any;
    totalMilestones: any;
    completedMilestones: any;
    completionRatePercent: number;
    completionPerMilestone: any;
    milestonesCompletedTimeline: {
        weekStartISO: string;
        completedCount: number;
    }[];
    sessionSummaries: any;
} | null>;
//# sourceMappingURL=analyticsService.d.ts.map