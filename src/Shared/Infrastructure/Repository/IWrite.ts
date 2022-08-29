import {IdValueObject} from "../../Domain/ValueObjects";

export interface IWrite<T> {
    create(item: T): void;
    update(id: IdValueObject, item: T): void;
    delete(id: IdValueObject): void;
}