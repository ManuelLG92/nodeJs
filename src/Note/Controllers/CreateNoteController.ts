import {AppController} from "../../Shared/Infrastructure/Controller/AppController";
import { Request, Response } from 'express';

export class CreateNoteController extends AppController {

    async execute(req: Request, res: Response): Promise<Response> {
        console.log(req.body)
        return res.status(201).send();
    }

}