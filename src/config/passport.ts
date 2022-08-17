import {UserInterface} from "../models/Users";

const passport = require('passport') //passport sirve para autenticar. login
const LocalStrategy = require('passport-local').Strategy //Strategy par autenticar: bd, gogle, face,etc
const User = require('../models/Users')
import bcrypt from 'bcrypt';

passport.use( new LocalStrategy ({
    usernameField : 'email' ,
    passwordField : 'password'
}, async (email: string, password: string, done: Function ) => {

    const user: UserInterface = await User.findOne({ email })
    if (!user) {
        return done(null, false, { message: 'Not user found!' } )
    } else {

        const match = await bcrypt.compare(password, user.password) //compara las contraseña con l de la BBDD
        if (match) {
            return done(null, user) //Si coinciden las contrasñas devuelve el usuario
        } else {
            return done (null, false, { message: 'Incorrect password' }) //sino devuelve un mensaje de error
        }
    }
}));

passport.serializeUser((user: UserInterface,done: Function) => { //guarda el usuario en la sesion del servidor
    done(null, user.id)
});

passport.deserializeUser((id: string, done: Function) => { //consulta mdiante la navegacion si el id del usuario
    User.findById(id, (err: any,user: UserInterface) => {
        done(err,user)
    })
});
