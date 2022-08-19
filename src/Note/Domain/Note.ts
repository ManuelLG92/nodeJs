import {WithToPrimitivesInterface} from "../../Shared/Domain/Entity/WithToPrimitivesInterface";
import {AggregateRoot} from "../../Shared/Domain/Entity/AggregateRoot";
import {IdValueObject, StringNullableValueObject, StringValueObject} from "../../Shared/Domain/ValueObjects";
import NoteProperties from "./NoteProperties";

class Note extends AggregateRoot implements WithToPrimitivesInterface {
    constructor(
        public readonly _id: IdValueObject,
        public readonly _user: IdValueObject,
        private _title: StringValueObject,
        private _description: StringNullableValueObject,
        public readonly _createdAt: Date,
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
       user: IdValueObject,
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

    [NoteProperties.user](): IdValueObject {
        return this._user;
    }

    [NoteProperties.title](): StringValueObject {
        return this._title;
    }

    [NoteProperties.description](): StringNullableValueObject {
        return this._description;
    }

}