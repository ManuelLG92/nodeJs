import {UserInterface} from "../models/Users";

import passport from "passport";
const LocalStrategy = require('passport-local').Strategy;
import User from "../models/Users";
import bcrypt from 'bcrypt';

passport.use( new LocalStrategy ({
    usernameField : 'email' ,
    passwordField : 'password'
}, async (email: string, password: string, done: Function ) => {

    const user: any|UserInterface = await User.findOne({ email })
    if (!user) {
        return done(null, false, { message: 'Not user found!' } )
    } else {

        const match = await bcrypt.compare(password, user.password)
        if (match) {
            return done(null, user)
        } else {
            return done (null, false, { message: 'Incorrect password' })
        }
    }
}));

passport.serializeUser((user: any|UserInterface,done: Function) => {
    done(null, user.id)
});

passport.deserializeUser((id: string, done: Function) => { // consulta mdiante la navegacion si el id del usuario
    User.findById(id, (err: any,user: UserInterface) => {
        done(err,user)
    })
});
