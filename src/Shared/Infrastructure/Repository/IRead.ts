import {IdValueObject} from "../../Domain/ValueObjects";
import {AggregateRoot} from "../../Domain/Entity/AggregateRoot";

export interface IRead<E> {
    find(item: IdValueObject, aggregateRoot: AggregateRoot): Promise<AggregateRoot[]>;
    findOne(id: IdValueObject, aggregateRoot: AggregateRoot): Promise<AggregateRoot|null>;
}