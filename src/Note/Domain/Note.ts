import {WithToPrimitivesInterface} from "../../Shared/Domain/Entity/WithToPrimitivesInterface";
import {AggregateRoot} from "../../Shared/Domain/Entity/AggregateRoot";
import {IdValueObject, StringNullableValueObject, StringValueObject} from "../../Shared/Domain/ValueObjects";
import NoteProperties from "./NoteProperties";
import {NoteInterface} from "../Infrastructure/NoteModel";
import {MongoIdValueObject} from "../../Shared/Domain/ValueObjects/MongoIdValueObject";

export class Note extends AggregateRoot implements WithToPrimitivesInterface {

    constructor(
        protected readonly _id: IdValueObject,
        public readonly _user: MongoIdValueObject,
        private _title: StringValueObject,
        private _description: StringNullableValueObject,
        protected readonly _createdAt: Date,
        protected _updatedAt: Date,
    ) {
        super(_id, _createdAt, _updatedAt);
    }

    toPrimitives(): Record<string, unknown> {
        return {
            [NoteProperties.id]: this[NoteProperties.id]().value(),
            [NoteProperties.title]: this[NoteProperties.title]().value(),
            [NoteProperties.description]: this[NoteProperties.description]().value(),
            [NoteProperties.user]: this[NoteProperties.user]().value(),
            [NoteProperties.createdAt]: this[NoteProperties.createdAt]().getDate(),
            [NoteProperties.updatedAt]: this[NoteProperties.updatedAt]().getDate(),
        };
    }

    static create(
        user: MongoIdValueObject,
        title: StringValueObject,
        description: StringNullableValueObject,
    ): Note {
        return new Note(
            IdValueObject.generate(),
            user,
            title,
            description,
            new Date(),
            new Date(),
        );
    }

    user(): MongoIdValueObject {
        return this._user;
    }

   title(): StringValueObject {
        return this._title;
    }

    description(): StringNullableValueObject {
        return this._description;
    }


    public static fromObject(obj: Record<string, unknown>): Note {

        return new Note(
            IdValueObject.create(obj[NoteProperties.id] as unknown as string) as unknown as IdValueObject,
            MongoIdValueObject.create(obj[NoteProperties.user] as unknown as string) as unknown as IdValueObject,
           StringValueObject.create(obj[NoteProperties.title] as unknown as string),
           StringNullableValueObject.create(obj[NoteProperties.description] as unknown as string),
            new Date(obj[NoteProperties.createdAt] as unknown as string),
            new Date(obj[NoteProperties.updatedAt] as unknown as string),
        );
        // return {
        //     _id: IdValueObject.create(obj[NoteProperties.id] as unknown as string) as unknown as IdValueObject,
        //     _user: MongoIdValueObject.create(obj[NoteProperties.user] as unknown as string) as unknown as IdValueObject,
        //     _title: StringValueObject.create(obj[NoteProperties.title] as unknown as string),
        //     _description: StringNullableValueObject.create(obj[NoteProperties.description] as unknown as string),
        //     _createdAt: new Date(obj[NoteProperties.createdAt] as unknown as string),
        //     _updatedAt: new Date(obj[NoteProperties.updatedAt] as unknown as string),
        // }
    }

    toPersistence(): NoteInterface {
        return {
            id: this.id().value(),
            user: this._user.value(),
            title: this._title.value(),
            description: this._description.value(),
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
        }
    }

    public static readonly CLASS_PATH = __filename;

}