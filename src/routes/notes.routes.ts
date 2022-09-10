import {RouterInterface, RouterMethodsRegister} from "./utils";
import isAuthenticated from "../helpers/Auth";
import {
    CreateNoteController,
    DeleteNoteController,
    EditNoteController,
    GetNoteByIdController,
    GetNotesController
} from "../Note/Controllers";
// import {CreateNoteDtoValidator} from "../Note/Controllers/Dto/CreateNoteDtoValidator";

export const noteRoutes: RouterInterface[] =
    [

        {
            method: RouterMethodsRegister.post,
            path: "notes/new",
            controller: new CreateNoteController(),
            middlewares: {}
        },
        {
            method: RouterMethodsRegister.get,
            path: "notes/:id",
            controller: new GetNoteByIdController(),
            middlewares: {}
        },
        {
            method: RouterMethodsRegister.get,
            path: "notes",
            controller: new GetNotesController(),
            middlewares: {isAuthenticated}
        },
        {
            method: RouterMethodsRegister.put,
            path: "notes/edit/:id",
            controller: new EditNoteController(),
            middlewares: {isAuthenticated}
        },
        {
            method: RouterMethodsRegister.delete,
            path: "notes/delete/:id",
            controller: new DeleteNoteController(),
            middlewares: {isAuthenticated}
        },
    ];

