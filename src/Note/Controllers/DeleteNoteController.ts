import {AppController} from "../../Shared/Infrastructure/Controller/AppController";
import {NextFunction, Request, Response} from "express";

export class DeleteNoteController extends AppController {

    async execute(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            return res.status(204).send();
        } catch (e) {
            next(e);
        }
    }
}