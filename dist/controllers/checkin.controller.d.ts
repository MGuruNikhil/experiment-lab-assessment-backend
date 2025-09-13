import type { Request, Response } from "express";
import { z } from "zod";
export declare const createScheduleSchema: z.ZodObject<{
    goalId: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodString>;
    frequency: z.ZodEnum<["daily", "weekly", "biweekly"]>;
    startDate: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    frequency: "weekly" | "biweekly" | "daily";
    goalId?: string | undefined;
    startDate?: string | undefined;
    milestoneId?: string | undefined;
}, {
    frequency: "weekly" | "biweekly" | "daily";
    goalId?: string | undefined;
    startDate?: string | undefined;
    milestoneId?: string | undefined;
}>;
export declare function createSchedule(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listSchedules(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getSchedule(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteSchedule(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare const createEntrySchema: z.ZodObject<{
    answers: z.ZodOptional<z.ZodAny>;
    notes: z.ZodOptional<z.ZodString>;
    progress: z.ZodOptional<z.ZodNumber>;
    completedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    progress?: number | undefined;
    answers?: any;
    notes?: string | undefined;
    completedAt?: string | undefined;
}, {
    progress?: number | undefined;
    answers?: any;
    notes?: string | undefined;
    completedAt?: string | undefined;
}>;
export declare function createEntry(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listEntries(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=checkin.controller.d.ts.map