import {WithToPrimitivesInterface} from "../../Shared/Domain/Entity/WithToPrimitivesInterface";
import {AggregateRoot} from "../../Shared/Domain/Entity/AggregateRoot";
import {IdValueObject, StringValueObject} from "../../Shared/Domain/ValueObjects";
import UserProperties from "./UserProperties";
import {UserInterface} from "../Infrastructure/UserModel";

export class User extends AggregateRoot implements WithToPrimitivesInterface {

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

    public static readonly CLASS_PATH = __filename;

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

    name(): StringValueObject {
        return this._name;
    }

    email(): StringValueObject {
        return this._email;
    }

    password(): StringValueObject {
        return this._password;
    }

    toPersistence(): UserInterface {
        return {
            id: this.id().value(),
            name: this._name.value(),
            email: this._email.value(),
            password: this._password.value(),
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
        };
    }

    static fromObject(obj: Record<string, unknown>): User {
        return new User(
            IdValueObject.create(obj[UserProperties.id] as unknown as string) as unknown as IdValueObject,
            StringValueObject.create(obj[UserProperties.name] as unknown as string),
            StringValueObject.create(obj[UserProperties.email] as unknown as string),
            StringValueObject.create(obj[UserProperties.password] as unknown as string),
            new Date(obj[UserProperties.createdAt] as unknown as string),
            new Date(obj[UserProperties.updatedAt] as unknown as string),
        );
    }

    toPrimitives(): Record<string, unknown> {
        return {
            [UserProperties.id]: this.id().value(),
            [UserProperties.name]: this.name().value(),
            [UserProperties.email]: this.email().value(),
            [UserProperties.createdAt]: this.createdAt().getDate(),
            [UserProperties.updatedAt]: this.updatedAt().getDate(),
        };
    }

}