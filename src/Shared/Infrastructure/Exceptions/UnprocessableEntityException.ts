import {BaseException, statusCode} from "./BaseException";

export class UnprocessableEntityException extends BaseException {
    constructor(public readonly body: string) {
        super("UnprocessableEntityException", statusCode.UNPROCESSABLE_ENTITY, body);
    }

    static fromBody(body: any): UnprocessableEntityException {
        return new UnprocessableEntityException(JSON.stringify(body));
    }
}