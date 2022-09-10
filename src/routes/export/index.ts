import {Router} from "express";
import {routes} from "../index";
const registerRoutes = (router: Router) => {

  routes.forEach((route) => {
          router[route.method](`/${route.path}`,(req, res, next) => {
              return [
                  ...Object.values(route.middlewares).map(it => (it as any)(req, res, next)) as any,
                  route.controller?.execute(req, res, next)
              ];
          });
  });
};

export default registerRoutes;