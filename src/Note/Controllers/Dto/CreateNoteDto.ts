import {BaseDto} from "../../../Shared/Infrastructure/Dto/BaseDto";
import { Length } from 'class-validator';
import {ICreateNoteRequest} from "../../Application/Request/ICreateNoteRequest";
import NoteProperties from "../../Domain/NoteProperties";

export class CreateNoteDto extends BaseDto implements ICreateNoteRequest{
    @Length(2, 100,{
        message: 'Title should be between 2 and 100',
    })
    title!: string;

    @Length(2, 100,{
        message: 'description is not valid ',
    })
    description?: string|undefined;

    constructor(request: Record<string, unknown>) {
        super();
        this.title = request[NoteProperties.title] as string || '' ;
        this.description = request[NoteProperties.description] as string || undefined;
    }
}