import { IdValueObject } from '../ValueObjects';
import BaseProperties from "../Constants/BaseProperties";

export abstract class AggregateRoot {
  protected constructor(
      protected readonly _id: IdValueObject,
      protected readonly _createdAt: Date,
      protected _updatedAt: Date,
  ) {}
  [BaseProperties.id](): IdValueObject {
    return this._id;
  }

  [BaseProperties.createdAt](): Date {
    return this._createdAt;
  }

  [BaseProperties.updatedAt](): Date {
    return this._updatedAt;
  }
}
