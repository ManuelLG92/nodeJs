import {AppController} from "../../Shared/Infrastructure/Controller/AppController";
import { Request, Response, NextFunction } from "express";

export class GetNotesController extends AppController{
     async execute(req: Request, res: Response, next: NextFunction): Promise<Response|any> {
         try{
             return res.status(200).send();
         } catch (e) {
             next(e);
         }

    }
}