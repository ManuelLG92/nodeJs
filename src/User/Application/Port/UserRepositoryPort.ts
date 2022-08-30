import {IdValueObject} from "../../../Shared/Domain/ValueObjects";
import {AggregateRoot} from "../../../Shared/Domain/Entity/AggregateRoot";
import {UserInterface} from "../../Infrastructure/UserModel";

export abstract class UserRepositoryPort {
    abstract findOne(id: IdValueObject): Promise<AggregateRoot|null>;
    abstract save(note: UserInterface): void;
}