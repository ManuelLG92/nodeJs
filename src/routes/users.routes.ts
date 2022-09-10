import { renderSignInForm,renderSignupForm,signup,signIn, logout} from "../User/Infrastructure/users.controllers";
import isAuthenticated from "../helpers/Auth";
import {RouterInterface, RouterMethodsRegister} from "./utils";

export const userRoutes: RouterInterface[] =
    [
        {
            method: RouterMethodsRegister.get,
            path: "users/signup",
            middlewares: {renderSignupForm}
        },
        {
            method: RouterMethodsRegister.post,
            path: "users/signup",
            middlewares: {signup}
        },
        {
            method: RouterMethodsRegister.get,
            path: "users/signin",
            middlewares: {renderSignInForm}
        },
        {
            method: RouterMethodsRegister.post,
            path: "users/signin",
            middlewares: {signIn}
        },
        {
            method: RouterMethodsRegister.post,
            path: "users/logout",
            middlewares: {isAuthenticated, logout}
        }
    ];


