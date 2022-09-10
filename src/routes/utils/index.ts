import {AppController} from "../../Shared/Infrastructure/Controller/AppController";

export enum RouterMethodsRegister {
    get ="get",
    post = "post",
    put = "put",
    patch = "patch",
    delete = "delete",
    options = "options"
}

export interface RouterInterface {
    method: RouterMethodsRegister,
    path: string,
    controller?: AppController,
    middlewares: any,
}


