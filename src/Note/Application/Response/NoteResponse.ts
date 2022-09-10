import {AppResponse} from "../../../Shared/Domain/Response/AppResponse";

export class NoteResponse extends AppResponse{
    constructor(private readonly title?: string, private readonly description?: string) {
        super();
    }
}