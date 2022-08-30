import {NextFunction, Request, Response} from "express";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    console.log('entra', new Date().getMilliseconds())
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({reason: `Forbidden access`}).end();
}
export default isAuthenticated;