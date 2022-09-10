import {BaseDto} from "../Shared/Infrastructure/Dto/BaseDto";
import {NextFunction, Response, Request} from "express";

// @ts-ignore
export const asyncHandler = fn => (req: Request, res: Response, next: NextFunction) => {
    if (fn.length > 3) {

        // not a standard request handler
        return next();
    }

    try {

        return fn(req, res, next);
    } catch (err) {
        return next(err);
    }
};

export const DtoValidator = async (dto: BaseDto, res: Response, next: NextFunction) => {
    return next();
    // return dto.validateOrRejectApp().then((validation: IException) => {
    //     console.log('suzze', validation);
    //     if (validation.status !== 200) {
    //         return res.status(422).json(validation);
    //     } else {
    //         return next();
    //     }
    // }, (e) => {
    //     console.log('error', e); // "¡Completada!"
    //     return res.status(500).json({reason: 'internal server error'});
    // });

};