// import {NextFunction, Request, Response} from "express";
// import {CreateNoteDto} from "./CreateNoteDto";
//
//
// export const CreateNoteDtoValidator = (req: Request, res: Response, next: NextFunction) => {
//     // const dto = new CreateNoteDto(req.body);
//
//     return next();
//     // dto.validateOrRejectApp().then((validation: IException) => {
//     //     if (validation.status !== 200) {
//     //         console.log('no valid status', validation);
//     //         const myError = new Error(JSON.stringify(UnprocessableEntityException.fromBody(validation))) as unknown as ErrorWithStatus;
//     //         myError.status = 422;
//     //         throw myError;
//     //         return res.status(422).json(validation);
//     //     } else {
//     //         console.log('on next', validation);
//     //         return next();
//     //     }
//     // }, (e) => {
//     //     // const myError = new Error(JSON.stringify(UnprocessableEntityException.fromBody(errorsBuilder))) as unknown as ErrorWithStatus;
//     //     // myError.status = 422;
//     //     //throw e;
//     //     console.log('error create note dto validator', e);
//     //     return res.status(500).json({reason: 'internal server error'});
//     // });
//
//
// }