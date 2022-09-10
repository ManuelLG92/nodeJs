import {NextFunction, Request, Response} from 'express';
import {BaseDto} from "../Dto/BaseDto";

export abstract class AppController {
    protected dto!: BaseDto;
    abstract execute(req: Request, res: Response, next: NextFunction): Promise<Response>;
}