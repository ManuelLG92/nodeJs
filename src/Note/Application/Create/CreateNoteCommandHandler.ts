import {AppCommandHandler} from "../../../Shared/Domain/Entity/AppCommandHandler";
import {CreateNoteCommand} from "./CreateNoteCommand";
import {Note} from "../../Domain/Note";
import {IdValueObject} from "../../../Shared/Domain/ValueObjects";
import {MongoIdValueObject} from "../../../Shared/Domain/ValueObjects/MongoIdValueObject";
import {NoteRepository} from "../../Infrastructure/NoteRepository";
import {AppEventEmitter} from "../../../Shared/Infrastructure/Event/AppEventEmitter";

export class CreateNoteCommandHandler extends AppCommandHandler<CreateNoteCommand> {
    async execute(createNoteCommand: CreateNoteCommand): Promise<void> {
        const note = Note.create(MongoIdValueObject.create("630aa046d1606ab304cf7ae4") as unknown as IdValueObject, createNoteCommand.title, createNoteCommand.description);
        AppEventEmitter.emit("testing", {id: "630aa046d1606ab304cf7ae4"});
        AppEventEmitter.getInstance().on("testing", (e) => console.log("received", e));
        await NoteRepository.getInstance().save(note.toPersistence());
    }
}