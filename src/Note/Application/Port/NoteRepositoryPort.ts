import {IdValueObject} from "../../../Shared/Domain/ValueObjects";
import {AggregateRoot} from "../../../Shared/Domain/Entity/AggregateRoot";
import {NoteInterface} from "../../Infrastructure/NoteModel";

export abstract class NoteRepositoryPort {
    abstract findOne(id: IdValueObject): Promise<AggregateRoot|null>;
    abstract save(note: NoteInterface): void;
}