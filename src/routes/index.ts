import {indexRoutes} from './index.routes'
import {noteRoutes} from "./notes.routes";
import {userRoutes} from "./users.routes";
import {RouterInterface} from "./utils";

export const routes: RouterInterface[] = [...indexRoutes, ...noteRoutes, ...userRoutes];