import {BaseValueObject} from "./BaseValueObject";

export class DateValueObject extends BaseValueObject<Date|undefined> {
    protected valuePrimitive?: Date;
    protected NAME = 'Date Nullable String';

    protected constructor(value?: Date) {
        super(value);
        this.valuePrimitive = value;
    }

    static create(value?: Date) {
        return new this(value);
    }

    public toString(): string {
        return `${this.valuePrimitive?.getMonth()}-${this.valuePrimitive?.getDay()}-${this.valuePrimitive?.getFullYear()}`;
    }


}
