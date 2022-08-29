import express, {Express, Router} from "express";
import path from "path";
import {ExpressHandlebars} from 'express-handlebars';
import session from 'express-session';
import morgan from 'morgan';
import flash from 'express-flash';
import passport from 'passport';
import dbConnection from "./database";
import registerRoutes from "./routes/export";
import bodyParser from "body-parser";
const app: Express = express();
require('./config/passport')

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', new ExpressHandlebars({
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs')

app.use(morgan('dev'))
/*// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)*/
app.use(bodyParser.urlencoded({extended: true})) //Rcibir los datos del usuario, password,etc
app.use(bodyParser.json());
// app.use(methodOverride('_method'));
app.use(session(
    {
        cookie: {maxAge: 60000},
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    }
))

app.use(passport.initialize());//Siempre despues del modulo session
app.use(passport.session());
app.use(flash());

const router = Router();
// router.use(bodyParser.json())
registerRoutes(router)
app.use(router)

    /* middelware*/
app.use((req,res,next) => {
    const flashValues = req.flash();

    if (Object.values(flashValues).length === 0 ){
        return next();
    }
    res.locals.success_msg = flashValues['success_msg'] && req.flash('success_msg')
    res.locals.error_msg = flashValues['error_msg'] && req.flash('error_msg')
    res.locals.error = flashValues['error'] && req.flash('error')
    res.locals.user = flashValues['success_msg'] && req.flash || null
    next();
})


//Statics files
app.use(express.static(path.join(__dirname, 'public')))

//run server is listening
app.listen(app.get('port'),() => {
    dbConnection().then(ed => console.log('data connected'))
    console.log("El servidor se esta ejecutando en el puerto: ",app.get('port'))
})
