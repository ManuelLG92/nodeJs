import {AppCommandHandler} from "../../../Shared/Domain/Entity/AppCommandHandler";
import {CreateNoteCommand} from "./CreateNoteCommand";
import {Note} from "../../Domain/Note";
import {IdValueObject} from "../../../Shared/Domain/ValueObjects";
import {MongoIdValueObject} from "../../../Shared/Domain/ValueObjects/MongoIdValueObject";
import {NoteRepository} from "../../Infrastructure/NoteRepository";

export class CreateNoteCommandHandler extends AppCommandHandler<CreateNoteCommand>{
   async execute(createNoteCommand: CreateNoteCommand): Promise<void> {
        const note  = Note.create(MongoIdValueObject.create('630aa046d1606ab304cf7ae4') as unknown as IdValueObject,createNoteCommand.title, createNoteCommand.description);
        await NoteRepository.getInstance().save(note.toPersistence());
    }
}