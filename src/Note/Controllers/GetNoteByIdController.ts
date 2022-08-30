import {Request, Response} from "express";
import {AppController} from "../../Shared/Infrastructure/Controller/AppController";

export class GetNoteByIdController extends AppController{
    async execute(req: Request, res: Response): Promise<Response> {
        console.log('entra GetNoteByIdController')
        return res.status(200).send();
    }
}