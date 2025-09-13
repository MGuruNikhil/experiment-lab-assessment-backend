export type CreateSessionInput = {
    userId: string;
    goalId?: string | null;
    milestoneId?: string | null;
    title?: string | null;
};
export type SendMessageInput = {
    userId: string;
    sessionId: string;
    content: string;
    useLLM?: boolean;
    mode?: "chat" | "explain" | "apply";
};
export declare class ServiceError extends Error {
    status: number;
    detail?: any;
    constructor(status: number, message: string, detail?: any);
}
export declare function createSession(input: CreateSessionInput): Promise<any>;
export declare function listSessions(userId: string): Promise<any>;
export declare function listMessages(userId: string, sessionId: string): Promise<any>;
export declare function sendMessage(input: SendMessageInput): Promise<{
    assistantMessage: any;
    session: any;
}>;
export declare function closeSession(userId: string, sessionId: string): Promise<any>;
//# sourceMappingURL=tutorService.d.ts.map