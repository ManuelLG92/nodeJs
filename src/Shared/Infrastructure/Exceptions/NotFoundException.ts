import {BaseException, statusCode} from "./BaseException";

export class NotFoundException extends BaseException {
    constructor(public readonly body: string) {
        super("NotFoundException", statusCode.NOT_FOUND, body);
    }

    static fromBody(body?: object): NotFoundException {
        return new NotFoundException(JSON.stringify(body));
    }
}