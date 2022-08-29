import {WithToPrimitivesInterface} from "../../Shared/Domain/Entity/WithToPrimitivesInterface";
import {AggregateRoot, IAggregateRoot} from "../../Shared/Domain/Entity/AggregateRoot";
import {IdValueObject, StringValueObject} from "../../Shared/Domain/ValueObjects";
import UserProperties from "./UserProperties";
import {NoteInterface} from "../../Note/Infrastructure/NoteModel";

interface IUser extends IAggregateRoot{
    _name: StringValueObject,
    _email: StringValueObject,
    _password: StringValueObject,
}
class User extends AggregateRoot implements WithToPrimitivesInterface {
    fromObject(obj: Record<string, unknown>): IUser {
        throw new Error("Method not implemented.");
    }
    constructor(
        public readonly _id: IdValueObject,
        private _name: StringValueObject,
        private _email: StringValueObject,
        private _password: StringValueObject,
        public readonly _createdAt: Date,
        protected _updatedAt: Date,
    ) {
        super(_id, _createdAt, _updatedAt);
    }

    toPrimitives(): Record<string, unknown> {
        return {
            [UserProperties.id]: this[UserProperties.id]().value(),
            [UserProperties.name]: this[UserProperties.name]().value(),
            [UserProperties.email]: this[UserProperties.email]().value(),
            [UserProperties.createdAt]: this[UserProperties.createdAt]().getDate(),
            [UserProperties.updatedAt]: this[UserProperties.updatedAt]().getDate(),
        };
    }

    static create(
       user: IdValueObject,
       name: StringValueObject,
       password: StringValueObject,
       email: StringValueObject,
    ): User {
        return new User(
            IdValueObject.generate(),
            name,
            password,
            email,
            new Date(),
            new Date(),
        );
    }

    [UserProperties.name](): StringValueObject {
        return this._name;
    }

    [UserProperties.email](): StringValueObject {
        return this._email;
    }

    [UserProperties.password](): StringValueObject {
        return this._password;
    }

    toPersistence(): NoteInterface {
        return {
            id: this.id().value(),
            user: this._name.value(),
            title: this._password.value(),
            description: this._email.value(),
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
        }
    }

}