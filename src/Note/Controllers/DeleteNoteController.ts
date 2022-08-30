import {AppController} from "../../Shared/Infrastructure/Controller/AppController";
import { Request, Response } from 'express';

export class DeleteNoteController extends AppController {

    async execute(req: Request, res: Response): Promise<Response> {
        console.log('entra delete')
        return res.status(204).send();
    }

}