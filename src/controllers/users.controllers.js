const usersCtrl = { }
const passport = require('passport')
const User = require('../models/Users')

usersCtrl.renderSignupForm = async (req, res ) => { 
    res.render('users/signup')
}
usersCtrl.signup= async (req, res ) => { 
    console.table(req.body)
    const errors = []
    const { name, email, password, confirm_password} = req.body
    if (password != confirm_password) {
        errors.push({'text' : 'Passwords doesn\'t match.'})
    } 
    if (password.length < 4) {
        errors.push({'text' : 'Password must have at least 4 digits.'})
    }

    if (errors.length > 0) {
        res.render('users/signup', {
            errors, name,email,password,confirm_password})
    } else {
        const emailUser = await User.findOne({ email : email });
        if (emailUser) {
            req.flash('error_msg', 'This email is already registred.')
            res.redirect('/users/signup')
        } else {
            const newUser = new User ({name,email, password}) 
            newUser.password = await newUser.encryptPassword(password) 
            await newUser.save() 
            req.flash('success_msg', 'User registred successfully')
            res.redirect('/users/signin')
        }
        
    }
    
}


usersCtrl.renderSigninForm = (req, res ) => { 
    res.render('users/signin')
}

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect : '/users/signin',
    successRedirect : '/notes',  
    failureFlash : true  
});

usersCtrl.logout = (req, res ) => {  
    req.logout();
    req.flash('success_msg' , 'Sesion closed!')
    res.redirect('/users/signin')
}




module.exports = usersCtrl
