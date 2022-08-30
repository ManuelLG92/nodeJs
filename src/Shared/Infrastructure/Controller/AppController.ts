import { Request, Response } from 'express';

export abstract class AppController {
    abstract execute(req: Request, res: Response): Promise<Response>;
}