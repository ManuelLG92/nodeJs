import {BaseDto} from "../../../Shared/Infrastructure/Dto/BaseDto";
import {IsUUID} from 'class-validator';
import NoteProperties from "../../Domain/NoteProperties";
import {IGetByIdRequest} from "../../Application/Request/IGetByIdRequest";

export class FindByIdDto extends BaseDto implements IGetByIdRequest{
    @IsUUID(4)
    id!: string;

    constructor(request: Record<string, unknown>) {
        super();
        this.id = request[NoteProperties.id] as string || '';
    }
}