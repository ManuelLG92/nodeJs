import {Router} from "express";
import {routes} from "../index";
import { RequestHandler } from "express";
const registerRoutes = (router: Router) => {

  routes.forEach((route) => {
          router[route.method](`/${route.path}`,(req, res, next) => {
              return [
                  ...Object.values(route.middlewares).map(it => (it as unknown as RequestHandler)(req, res, next)),
                  route.controller?.execute(req, res, next)
              ];
          });
  });
};

export default registerRoutes;