import { BaseValueObject } from './BaseValueObject';

export class StringNullableValueObject extends BaseValueObject<string|undefined> {
  protected valuePrimitive?: string;
  MAX_LENGTH = 1000;
  protected MIN_LENGTH = 1;
  protected NAME = 'Base Nullable String';

  protected constructor(value?: string) {
    super(value);
    this.valuePrimitive = value?.trim();
    this.validate();
  }

  static create(value?: string) {
    return new this(value);
  }

  protected validate(): void {
    if (
      this.valuePrimitive &&
      (this.valuePrimitive?.length > this.MAX_LENGTH ||
        this.valuePrimitive?.length < this.MIN_LENGTH)
    ) {
      throw new Error(
        `${this.NAME} value should be at least ${this.MIN_LENGTH} and maximum ${this.MAX_LENGTH} characters.`,
      );
    }
  }
}
