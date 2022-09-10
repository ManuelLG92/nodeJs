import { Model } from "mongoose";
import {IdValueObject} from "../../Domain/ValueObjects";
import { AggregateRoot } from "../../Domain/Entity/AggregateRoot";
import {NotFoundException} from "../Exceptions/NotFoundException";

interface AggregateRootFunctions {
  fromObject (item: object): AggregateRoot;
}

export class BaseRepositoryService<T>{

  private _model!: Model<T>;
  private readonly _entity: AggregateRootFunctions;
  private readonly entityName!: string;

  constructor(entity: string, model: Model<T>) {
    this._entity = (Object.values(require(entity))[0]) as unknown as AggregateRootFunctions;
    this.entityName = entity.split("/").at(-1)?.replace(".ts","") || "entity";
    this._model = model;
  }

  async save(item: T) {
    await this._model.create(item);
  }

  async findOne(id: IdValueObject): Promise<AggregateRoot | null> {
    const entity = await this._model.findOne({id: id.value()}).exec();

    if (entity === null) {
      throw NotFoundException.fromBody({reason: `Not found ${this.entityName} for id ${id.value()}`});
      // throw new Error(`Entity ${id.value()} not found.`)
    }

    return this._entity.fromObject(entity);

  }


  async create(item: T): Promise<void> {
    await this._model.create(item);
  }

  async delete(id: IdValueObject): Promise<void> {
    await this._model.deleteOne({id: id.value()}).exec();
  }

  async find(id: IdValueObject): Promise<AggregateRoot[]> {
    const items = await this._model.find({ id : id.value() }).exec();

    if (!items || items.length){
      return [];
    }

    return this.toAggregateRootArray(items);
  }

  async update(id: IdValueObject, item: T): Promise<void> {
    const entity = await this._model.find({ id : id.value() }).exec();

    if (!entity){
      throw new Error(`Entity ${id} not found`);
    }
    await this.save(item);
  }

  private toAggregateRootArray(items: unknown){

    return [items].map(item => this._entity.fromObject(item as object));
  }


}
