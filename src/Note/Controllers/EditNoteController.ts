import {AppController} from "../../Shared/Infrastructure/Controller/AppController";
import { Request, Response } from 'express';

export class EditNoteController extends AppController {

    async execute(req: Request, res: Response): Promise<Response> {
        console.log('entra Edit')
        return res.status(204).send();
    }

}