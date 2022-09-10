import {AppQueryHandler} from "../../../Shared/Domain/Entity/AppQueryHandler";
import {FindByIdQuery} from "./FindByIdQuery";
import {NoteRepository} from "../../Infrastructure/NoteRepository";
import {NoteResponse} from "../Response/NoteResponse";
import {Note} from "../../Domain/Note";
import {AppResponse} from "../../../Shared/Domain/Response/AppResponse";
import {NotFoundException} from "../../../Shared/Infrastructure/Exceptions/NotFoundException";

export class FindByIdQueryHandler extends AppQueryHandler<FindByIdQuery>{
    async execute(query: FindByIdQuery): Promise<AppResponse> {
        const note = await NoteRepository.getInstance().findOne(query.id) as unknown as Note;
        return new NoteResponse(note.title().value(), note.description().value());
    }
    
}