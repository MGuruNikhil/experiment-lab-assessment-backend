export type GenerateReplyArgs = {
    systemPrompt: string;
    userPrompt: string;
    messages: Array<{
        role: "user" | "assistant" | "system";
        content: string;
    }>;
    goal?: {
        title?: string;
    } | null;
    milestone?: {
        title?: string;
    } | null;
    mode?: string;
};
export type GenerateReplyResult = {
    text: string;
    raw?: any;
    tokensUsed?: number;
};
export declare function generateReply(args: GenerateReplyArgs): Promise<GenerateReplyResult>;
//# sourceMappingURL=heuristicProvider.d.ts.map