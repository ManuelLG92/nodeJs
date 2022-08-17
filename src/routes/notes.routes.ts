import {
    renderNoteForm,
    renderNewNote,
    renderNotes,
    renderEditForm,
    renderUpdateNotes,
    renderDeleteNotes
} from "../controllers/notes.controllers";
import {RouterInterface, RouterMethodsRegister} from "./utils";
import isAuthenticated from "../helpers/Auth";

export const noteRoutes: RouterInterface[] =
    [
        {
            method: RouterMethodsRegister.get,
            path: 'notes/add',
            handler: {isAuthenticated, renderNoteForm}
        },
        {
            method: RouterMethodsRegister.get,
            path: 'notes/new',
            handler: {isAuthenticated, renderNewNote}
        },
        {
            method: RouterMethodsRegister.get,
            path: 'notes',
            handler: {isAuthenticated, renderNotes}
        },
        {
            method: RouterMethodsRegister.get,
            path: 'notes/edit/:id',
            handler: {isAuthenticated, renderEditForm}
        },
        {
            method: RouterMethodsRegister.get,
            path: 'notes/edit-note/:id',
            handler: {isAuthenticated, renderUpdateNotes}
        },
        {
            method: RouterMethodsRegister.get,
            path: 'notes/delete/:id',
            handler: {isAuthenticated, renderDeleteNotes}
        }
    ];

