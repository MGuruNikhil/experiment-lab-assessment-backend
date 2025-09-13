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
export declare function createSession(input: CreateSessionInput): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    title: string | null;
    goalId: string | null;
    milestoneId: string | null;
    status: string;
}>;
export declare function listSessions(userId: string): Promise<{
    id: string;
    createdAt: Date;
    title: string | null;
    goalId: string | null;
    milestoneId: string | null;
    status: string;
}[]>;
export declare function listMessages(userId: string, sessionId: string): Promise<{
    id: string;
    createdAt: Date;
    metadata: import("../generated/prisma/runtime/library").JsonValue;
    sender: string;
    content: string;
}[]>;
export declare function sendMessage(input: SendMessageInput): Promise<{
    assistantMessage: {
        id: string;
        createdAt: Date;
        metadata: import("../generated/prisma/runtime/library").JsonValue;
        sender: string;
        content: string;
    };
    session: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        title: string | null;
        goalId: string | null;
        milestoneId: string | null;
        status: string;
    };
}>;
export declare function closeSession(userId: string, sessionId: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    title: string | null;
    goalId: string | null;
    milestoneId: string | null;
    status: string;
}>;
//# sourceMappingURL=tutorService.d.ts.map