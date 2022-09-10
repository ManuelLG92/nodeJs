import {UserInterface} from "../User/Infrastructure/UserModel";

import passport from "passport";
import {Strategy} from "passport-local";
import UserModel from "../User/Infrastructure/UserModel";
import bcrypt from "bcrypt";

passport.use(new Strategy({
    usernameField: "email",
    passwordField: "password"
}, async (email: string, password: string, done: Function) => {

    const user: any | UserInterface = await UserModel.findOne({email});
    if (!user) {
        return done(null, false, {message: "Not user found!"});
    } else {

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, {message: "Incorrect password"});
        }
    }
}));

passport.serializeUser((user: any|UserInterface,done: Function) => {
    done(null, user.id);
});

passport.deserializeUser((id: string, done: Function) => { // consulta mdiante la navegacion si el id del usuario
    UserModel.findById(id, (err: any, user: UserInterface) => {
        done(err,user);
    });
});
