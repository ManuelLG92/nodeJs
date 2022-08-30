import {Request, Response} from "express";
import {AppController} from "../../Shared/Infrastructure/Controller/AppController";

export class GetNotesController extends AppController{
    async execute(req: Request, res: Response): Promise<Response> {
        console.log('entra GetNotesController')
        return res.status(200).send();
    }
}