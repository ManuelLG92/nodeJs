export interface IException {
    name: string;
    status: number;
    message: string;
}

export enum statusCode {
    INTERNAL_SERVER_ERROR = 500,
    NOT_FOUND = 404,
    UNPROCESSABLE_ENTITY = 422,
}
export class BaseException extends Error implements IException  {
     constructor(
        public readonly name: string = 'Exception',
        public readonly status: statusCode = statusCode.INTERNAL_SERVER_ERROR,
        public readonly message: string = 'Internal server Error'
    ) {
        super(message);
        Object.setPrototypeOf(this,new.target.prototype)
        Error.captureStackTrace(this)
    }

    toJSON(): IException{
        return {
            name: this.name,
            status: this.status,
            message: this.message,
        }
    }

    toJsonStringify(): string{
        return JSON.stringify({
            name: this.name,
            status: this.status,
            message: this.message,
        })
    }
}