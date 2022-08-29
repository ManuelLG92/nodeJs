export abstract class BaseValueObject<T> {
  protected valuePrimitive?: T;

  protected constructor(value?: T) {
    this.valuePrimitive = value;
  }
  public value(): T|undefined {
    return this.valuePrimitive;
  }
}
