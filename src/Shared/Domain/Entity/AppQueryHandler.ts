import {AppQuery} from "./AppQuery";
import {AppResponse} from "../Response/AppResponse";

export abstract class AppQueryHandler<T extends AppQuery> {
    abstract execute(T: AppQuery): AppResponse;
}
