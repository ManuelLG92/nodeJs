import {Router} from "express";
import {routes} from '../index'
const registerRoutes = (router: Router) => {
  routes.forEach((route) => {
    router[route.method](`/${route.path}`, ...Object.values(route.handler) as any)
  })
}

export default registerRoutes;