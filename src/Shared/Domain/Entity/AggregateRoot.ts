import {IdValueObject} from "../ValueObjects";

export interface IAggregateRoot {
    _id: IdValueObject,
    _createdAt: Date,
    _updatedAt: Date,
}

export abstract class AggregateRoot {

    protected constructor(
        protected readonly _id: IdValueObject,
        protected readonly _createdAt: Date,
        protected _updatedAt: Date,
    ) {
    }

    id(): IdValueObject {
        return this._id;
    }

    createdAt(): Date {
        return this._createdAt;
    }

    updatedAt(): Date {
        return this._updatedAt;
    }

    public static fromObject(obj: Record<string, unknown>): AggregateRoot {
        throw new Error("Implement this methods in the properly son class. ");
    }

    public static readonly CLASS_PATH = __filename;

    serialize(){
        return "todo";
    }



}
