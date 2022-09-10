import {
    validateOrReject, ValidationError
} from 'class-validator';
import {UnprocessableEntityException} from "../Exceptions/UnprocessableEntityException";
import {ErrorWithStatus} from "../Exceptions/AppError";
import {BaseException, statusCode} from "../Exceptions/BaseException";

export abstract class BaseDto {
    validateOrRejectApp = async (): Promise<void> => {
        try {
            await validateOrReject(this)

        } catch (errors: unknown) {
            const validationErrors = Object.values(errors as [])
            const errorsBuilder: {[key: string]: object} = {};
            validationErrors.forEach((err: ValidationError) => {
                // errorsBuilder[err['property']] = Object.values(err['constraints'])
                errorsBuilder[err.property] = Object.values(err.constraints as unknown as object)
            })
            throw UnprocessableEntityException.fromBody(errorsBuilder);
        }
    }
}