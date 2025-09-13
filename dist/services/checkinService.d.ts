import { type Frequency } from "../utils/checkinUtils";
export declare function ensureGoalOwnership(userId: string, goalId: string): Promise<void>;
export declare function ensureMilestoneOwnership(userId: string, milestoneId: string): Promise<void>;
export declare function createSchedule(params: {
    userId: string;
    goalId?: string | null;
    milestoneId?: string | null;
    frequency: Frequency;
    startDate?: Date | null;
}): Promise<any>;
export declare function listSchedules(userId: string, filters?: {
    goalId?: string;
}): Promise<any>;
export declare function getScheduleForUser(userId: string, id: string): Promise<any>;
export declare function getScheduleWithEntries(userId: string, id: string): Promise<any>;
export declare function deleteSchedule(userId: string, id: string): Promise<{
    ok: boolean;
}>;
export declare function createEntry(params: {
    userId: string;
    scheduleId: string;
    answers?: any | null;
    notes?: string | null;
    progress?: number | null;
    completedAt?: Date | null;
}): Promise<{
    entry: any;
    updatedSchedule: any;
    updatedMilestone: any;
}>;
export declare function listEntries(userId: string, opts?: {
    goalId?: string;
    limit?: number;
}): Promise<any>;
//# sourceMappingURL=checkinService.d.ts.map