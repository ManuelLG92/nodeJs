import {Request, Response} from "express";

export const index = (req: Request, res: Response) => {
    res.render('index.hbs')
}
export const about = (req: Request, res: Response) => {
    res.render('about.hbs')
}
