const passport = require('passport') //passport sirve para autenticar. login
const LocalStrategy = require('passport-local').Strategy //Strategy par autenticar: bd, gogle, face,etc
const User = require('../models/Users')

passport.use( new LocalStrategy ({
    usernameField : 'email' ,
    passwordField : 'password'
}, async (email, password, done ) => {
    //confirmar si existe el correo en la base de datos
    const user = await User.findOne({ email }) //busca el email en la bd
    if (!user) { //sino sta el correo
        return done(null, false, { message: 'Not user found!' } )
    } else { //si existe el correo en la BBDD
        //confirmar contraseña
        const match = await user.matchPassword(password) //compara las contraseña con l de la BBDD
        if (match) {
            return done(null, user) //Si coinciden las contrasñas devuelve el usuario
        } else {
            return done (null, false, { message: 'Incorrect password' }) //sino devuelve un mensaje de error
        }
    }
}));

passport.serializeUser((user,done) => { //guarda el usuario en la sesion del servidor
    done(null, user.id)
});

passport.deserializeUser((id, done) => { //consulta mdiante la navegacion si el id del usuario
    User.findById(id, (err,user) => {
        done(err,user)
    })
});
