import {AppQuery} from "../../../Shared/Domain/Entity/AppQuery";
import {IdValueObject} from "../../../Shared/Domain/ValueObjects";

interface IFindById {
    id: string;
}

export class FindByIdQuery extends AppQuery {
    constructor(public readonly id: IdValueObject) {
        super();
    }
    static create(iFindById: IFindById){
        return new FindByIdQuery(IdValueObject.create(iFindById.id) as unknown as IdValueObject);
    }
}