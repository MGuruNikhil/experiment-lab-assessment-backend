import type { Request, Response } from "express";
export declare function createSession(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listSessions(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listMessages(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function sendMessage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function closeSession(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=tutor.controller.d.ts.map