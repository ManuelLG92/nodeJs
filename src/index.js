const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session')
const morgan = require('morgan')
const flash = require('connect-flash')
const passport = require('passport')
//inicializaciones
const app = express();
require('./config/passport') //importamos el modulo passport als ervisor
require('./database.js');


//settings
app.set('port', process.env.PORT || 3000); //por si el servisor nos da un puerto de rescata cn process.env.PORT
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs',exphbs ({ //configuracion del motor de plantilla que usaremps para las paginas
    defaultLayout: 'main.hbs',
    LayoutsDir: path.join(app.get('views'), 'layouts') ,
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));


app.set('view engine', '.hbs') //aqui le decimos que empiece a usar la cnfiguracion anterior

//middlewares. configuracion general d elos modulos
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})) //Rcibir los datos del usuario, password,etc
app.use(methodOverride('_method')); //sirva pra los form enviaen put/delete ademas de get/post 
app.use(session( { //configuracions pra autnticar al usuario
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());//Siempre despues del modulo session
app.use(passport.session()); 
app.use(flash());

//Global variables
    /*Creamos nuestro propio middelware*/
app.use((req,res,next) => { //res.locals.succes_msg = declarar variable global
    res.locals.success_msg = req.flash('success_msg') //obtnemos la key success_msg usada en los flash
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error') //error autenticacion passport
    res.locals.user = req.user || null
    next();
})
//routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/users.routes'))
app.use(require('./routes/notes.routes'))
//Statics files
app.use(express.static(path.join(__dirname, 'public'))) //archivos publicos o globales (estaticos)
//run server is listenning
app.listen(app.get('port'),() => {
    console.log("El servidor se esta ejecutando en el puerto: ",app.get('port'))
})
