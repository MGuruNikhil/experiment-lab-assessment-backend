export type GenerateReplyArgs = {
    systemPrompt: string;
    userPrompt: string;
    messages: Array<{
        role: "user" | "assistant" | "system";
        content: string;
    }>;
    goal?: any;
    milestone?: any;
    mode?: string | undefined;
};
export type GenerateReplyResult = {
    text: string;
    raw?: any;
    tokensUsed?: number;
};
export declare function generateReply(args: GenerateReplyArgs): Promise<GenerateReplyResult>;
//# sourceMappingURL=openrouterProvider.d.ts.map