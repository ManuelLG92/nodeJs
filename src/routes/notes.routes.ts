import {RouterInterface, RouterMethodsRegister} from "./utils";
import isAuthenticated from "../helpers/Auth";
import {CreateNoteController, DeleteNoteController, EditNoteController, GetNotesController} from "../Note/Controllers";

export const noteRoutes: RouterInterface[] =
    [

        {
            method: RouterMethodsRegister.post,
            path: 'notes/new',
            controller: new CreateNoteController(),
            middlewares: {}
        },
        {
            method: RouterMethodsRegister.get,
            path: 'notes',
            controller: new GetNotesController(),
            middlewares: {isAuthenticated}
        },
        {
            method: RouterMethodsRegister.put,
            path: 'notes/edit/:id',
            controller: new EditNoteController(),
            middlewares: {isAuthenticated}
        },
        {
            method: RouterMethodsRegister.delete,
            path: 'notes/delete/:id',
            controller: new DeleteNoteController(),
            middlewares: {isAuthenticated}
        },
    ];

