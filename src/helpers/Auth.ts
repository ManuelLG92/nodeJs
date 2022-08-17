import {NextFunction, Request, Response} from "express";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    } 
    req.flash ('error_msg' , 'You should be logged in to see this section! ')
    res.redirect('/users/signin')
}
export default isAuthenticated;