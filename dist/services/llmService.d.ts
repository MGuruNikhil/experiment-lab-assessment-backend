import { z } from "zod";
export declare const LLMJourneySchema: z.ZodObject<{
    journeyTitle: z.ZodString;
    durationWeeks: z.ZodNumber;
    chunking: z.ZodEnum<["weekly", "biweekly"]>;
    milestones: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        startWeek: z.ZodNumber;
        endWeek: z.ZodNumber;
        estimatedHours: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        dependencies: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description: string;
        startWeek: number;
        endWeek: number;
        estimatedHours: number;
        dependencies: number[];
    }, {
        title: string;
        startWeek: number;
        endWeek: number;
        description?: string | undefined;
        estimatedHours?: number | undefined;
        dependencies?: number[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    chunking: "weekly" | "biweekly";
    journeyTitle: string;
    durationWeeks: number;
    milestones: {
        title: string;
        description: string;
        startWeek: number;
        endWeek: number;
        estimatedHours: number;
        dependencies: number[];
    }[];
}, {
    chunking: "weekly" | "biweekly";
    journeyTitle: string;
    durationWeeks: number;
    milestones: {
        title: string;
        startWeek: number;
        endWeek: number;
        description?: string | undefined;
        estimatedHours?: number | undefined;
        dependencies?: number[] | undefined;
    }[];
}>;
export type LLMJourney = z.infer<typeof LLMJourneySchema>;
export type ProviderOptions = {
    durationWeeks?: number;
    chunking?: "weekly" | "biweekly";
};
export type MinimalGoal = {
    id: string;
    title: string;
    description?: string | null;
    complexity?: number | null;
    suggestedWeeks?: number | null;
    chunking?: string | null;
};
export declare function generateJourneyWithLLM(goal: MinimalGoal, options?: ProviderOptions): Promise<{
    parsed?: LLMJourney;
    rawText: string;
}>;
//# sourceMappingURL=llmService.d.ts.map