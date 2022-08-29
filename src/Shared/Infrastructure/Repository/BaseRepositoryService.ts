import { Model } from 'mongoose';
import {IdValueObject} from "../../Domain/ValueObjects";
import { AggregateRoot } from "../../Domain/Entity/AggregateRoot";

interface AggregateRootFunctions {
  fromObject (item: object): AggregateRoot;
}

export class BaseRepositoryService<T>{

  private _model!: Model<T>;
  private readonly _entity: AggregateRootFunctions;

  constructor(entity: string, model: Model<T>) {
    this._entity = (Object.values(require(entity))[0]) as unknown as AggregateRootFunctions;
    this._model = model;
  }

  async save(item: T) {
    await this._model.create(item);
  }

  async findOne(id: IdValueObject): Promise<AggregateRoot | null> {
    const entity = await this._model.findOne({id: id.value()}).exec();

    if (entity === null) {
      throw new Error(`Entity ${id} not found.`)
    }

    return this._entity.fromObject(entity);

  }


  async create(item: T): Promise<void> {
    await this._model.create(item);
  }

  async delete(id: IdValueObject): Promise<void> {
    await this._model.deleteOne({id: id.value()}).exec()
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
