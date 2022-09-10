import {AppController} from "../../Shared/Infrastructure/Controller/AppController";
import {Request, Response, NextFunction} from 'express';
import {FindByIdDto} from "./Dto/FindByIdDto";
import {FindByIdQuery} from "../Application/FindById/FindByIdQuery";
import {IGetByIdRequest} from "../Application/Request/IGetByIdRequest";
import {FindByIdQueryHandler} from "../Application/FindById/FindByIdQueryHandler";

export class GetNoteByIdController extends AppController {
    async execute(req: Request, res: Response, next: NextFunction): Promise<Response | any> {

        try {
            this.dto = new FindByIdDto(req.params);
            await this.dto.validateOrRejectApp();
            const query = FindByIdQuery.create(this.dto as unknown as IGetByIdRequest)
            const handler = await new FindByIdQueryHandler().execute(query);
            return res.status(200).json(handler);
        } catch (e) {
            next(e)
        }

    }

}