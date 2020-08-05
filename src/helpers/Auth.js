const helper = { }

helper.isAutenticated = (req,res,next) => {
    if (req.isAuthenticated()) {
        
        return next();
    } 
    req.flash ('error_msg' , 'You should be logged in to see this section! ')
    res.redirect('/users/signin')
}
module.exports = helper