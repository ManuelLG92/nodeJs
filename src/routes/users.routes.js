const router = require('express').Router();
const { renderSigninForm,renderSignupForm,signup,signin, logout} = require('../controllers/users.controllers')


router.get('/users/signup', renderSignupForm);
router.post('/users/signup', signup); 


router.get('/users/signin', renderSigninForm );
router.post('/users/signin', signin ); 

router.get('/users/logout', logout );

module.exports = router;

