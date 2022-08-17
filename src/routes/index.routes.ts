import {about, index} from "../controllers/index.controllers";
import {RouterInterface, RouterMethodsRegister} from "./utils";

export const indexRoutes: RouterInterface[] =
  [
      {
          method: RouterMethodsRegister.get,
          path: '',
          handler: {index}
      },
      {
          method: RouterMethodsRegister.get,
          path: 'about',
          handler: {about}
      }
  ];
