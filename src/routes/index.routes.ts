import {about, index} from "../controllers/index.controllers";
import {RouterInterface, RouterMethodsRegister} from "./utils";

export const indexRoutes: RouterInterface[] =
  [
      {
          method: RouterMethodsRegister.get,
          path: '',
          middlewares: {index}
      },
      {
          method: RouterMethodsRegister.get,
          path: 'about',
          middlewares: {about}
      }
  ];
