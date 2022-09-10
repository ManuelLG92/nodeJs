import passport from "passport";
import UserModel from "./UserModel";
import {NextFunction, Request, Response} from "express";
import bcrypt from "bcrypt";

export const renderSignupForm = (_req: Request, res: Response) => {
    res.render("users/signup");
};

export const signup = async (req: Request, res: Response) => {
    const errors = [];
    const { name, email, password, confirm_password} = req.body;
    if (password !== confirm_password) {
        errors.push({"text" : "Passwords doesn't match."});
    }
    if (password.length < 4) {
        errors.push({"text" : "Password must have at least 4 digits."});
    }

    if (errors.length > 0) {
        res.render("users/signup", {
            errors, name,email,password,confirm_password});
    } else {
        const emailUser = await UserModel.findOne({ email : email });
        if (emailUser) {
            req.flash("error_msg", "This email is already registered.");
            res.redirect("/users/signup");
        } else {
            const t = new Date();
            const t2 = new Date();
            const newUser = new UserModel({name,email, password,  createdAt: t,  updatedAt: t2});
            newUser.password = await bcrypt.hash(password, 10);
            await newUser.save();
            req.flash("success_msg", "User registered successfully");
            res.redirect("/users/signin");
        }

    }
};

export const renderSignInForm = (_req: Request, res: Response) => {
    res.render("users/signin");
};

export const signIn = passport.authenticate("local", {
    failureRedirect : "/users/signin",
    successRedirect : "/notes",  
    failureFlash : true  
});

export const logout = (req: Request, res: Response, next: NextFunction) => {
    req.logout((err) => {
        if (err) { return next(err); }
        req.flash("success_msg" , "Session closed!");
        res.redirect("/");
    });
};
