import { Document, Model } from 'mongoose';

export class AppRepositoryService<T extends Document> {
  private _model: Model<T>;

  async save(item: T) {
    return await this._model.create(item);
  }
  async findOneByEmail(email: string) {
    return this._model.findOne({ email });
  }
}
