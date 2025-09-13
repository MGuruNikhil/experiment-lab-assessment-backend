import { z } from "zod";
export declare const SessionSummarySchema: z.ZodObject<{
    summaryText: z.ZodString;
    keyPoints: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    actionItems: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodUnion<[z.ZodEffects<z.ZodString, {
        text: string;
    }, string>, z.ZodObject<{
        text: z.ZodString;
        due: z.ZodOptional<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        due?: Date | undefined;
    }, {
        text: string;
        due?: Date | undefined;
    }>]>, {
        text: string;
    }, string | {
        text: string;
        due?: Date | undefined;
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    summaryText: string;
    keyPoints: string[];
    actionItems: {
        text: string;
    }[];
}, {
    summaryText: string;
    keyPoints?: string[] | undefined;
    actionItems?: (string | {
        text: string;
        due?: Date | undefined;
    })[] | undefined;
}>;
export type SessionSummaryOutput = z.infer<typeof SessionSummarySchema>;
export declare function getSummary(userId: string, sessionId: string): Promise<any>;
export declare function generateAndStoreSummary(userId: string, sessionId: string, opts?: {
    force?: boolean;
}): Promise<{
    readonly summary: any;
    readonly cached: true;
} | {
    readonly summary: any;
    readonly cached: false;
}>;
//# sourceMappingURL=tutorSummaryService.d.ts.map