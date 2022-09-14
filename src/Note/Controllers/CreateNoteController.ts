import {AppController} from "../../Shared/Infrastructure/Controller/AppController";
import {NextFunction, Request, Response} from "express";
import {CreateNoteDto} from "./Dto/CreateNoteDto";
import {CreateNoteCommand} from "../Application/Create/CreateNoteCommand";
import {CreateNoteCommandHandler} from "../Application/Create/CreateNoteCommandHandler";

export class CreateNoteController extends AppController {

    async execute(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
        try {
            this.dto = new CreateNoteDto(req.body);
            await this.dto.validateOrRejectApp();
            /*if (val?.status !== 200) {
                return next(val)
            }*/
            await new CreateNoteCommandHandler().execute(CreateNoteCommand.create(this.dto as unknown as CreateNoteDto));
            return res.status(201).send();
        } catch (e) {
            next(e);
        }

    }

}