import type { Request, Response } from "express";
export declare function generateHeuristicJourney(title: string, complexity?: number | null, durationWeeks?: number | null, chunking?: "weekly" | "biweekly" | null): {
    journeyTitle: string;
    durationWeeks: number;
    chunking: "weekly" | "biweekly";
    milestones: {
        title: string;
        description: string;
        orderIndex: number;
        startWeek: number;
        endWeek: number;
        estimatedHours: number;
        dependsOnId: string | null;
    }[];
};
export declare function createGoal(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listGoals(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getGoalById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateGoal(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteGoal(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createJourney(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createMilestone(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateMilestone(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteMilestone(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function addMilestoneDependency(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function suggestForGoal(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listSuggestionsForGoal(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=goal.controller.d.ts.map