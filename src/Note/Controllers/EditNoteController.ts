import {AppController} from "../../Shared/Infrastructure/Controller/AppController";
import {Request, Response, NextFunction} from "express";

export class EditNoteController extends AppController {

    async execute(req: Request, res: Response, next: NextFunction): Promise<Response | any> {
        try {
            console.log("entra Edit");
            return res.status(204).send();
        } catch (e) {
            next(e);
        }

    }


}