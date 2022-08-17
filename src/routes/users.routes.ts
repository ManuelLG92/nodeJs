import { renderSignInForm,renderSignupForm,signup,signIn, logout} from '../controllers/users.controllers'
import isAuthenticated from "../helpers/Auth";
import {RouterInterface, RouterMethodsRegister} from "./utils";

export const userRoutes: RouterInterface[] =
    [
        {
            method: RouterMethodsRegister.get,
            path: 'users/signup',
            handler: {renderSignupForm}
        },
        {
            method: RouterMethodsRegister.post,
            path: 'users/signup',
            handler: {signup}
        },
        {
            method: RouterMethodsRegister.get,
            path: 'users/signin',
            handler: {renderSignInForm}
        },
        {
            method: RouterMethodsRegister.post,
            path: 'users/signin',
            handler: {signIn}
        },
        {
            method: RouterMethodsRegister.post,
            path: 'users/logout',
            handler: {isAuthenticated, logout}
        }
    ];


