import {IdValueObject} from "../../../../src/Shared/Domain/ValueObjects";

export class IdValueObjectStub {
    public static DEFAULT_ID = 'dca2c7c5-7faf-439f-866f-49f1039bd22e';
    static byDefault(){
        return IdValueObject.create(this.DEFAULT_ID)
    }
    static autogenerate(){
        return IdValueObject.generate()
    }
    static fromValue(value: string){
        return IdValueObject.create(value)
    }
}