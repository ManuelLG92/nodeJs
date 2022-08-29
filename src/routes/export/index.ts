import {Router} from "express";
import {routes} from '../index'
const registerRoutes = (router: Router) => {
  // create application/json parser
  // var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
//   var urlencodedParser = bodyParser.urlencoded({ extended: true })
  routes.forEach((route) => {
    router[route.method](`/${route.path}`, ...Object.values(route.handler) as any)
  })
}

export default registerRoutes;