import Note, {NoteInterface} from './../models/Note'
import {Request, Response} from "express";

export const renderNoteForm = (_req: Request, res: Response) => {
    res.render('notes/new.hbs')
}

export const renderNewNote = async (req: Request, res: Response) => {
    const {title, description} = (req.body)
    const newNote = new Note({ title, description})
    // @ts-ignore
    newNote.user = req?.user['id'];
    await newNote.save();
    req.flash('success_msg', "Your note has been added successfully.")
    res.redirect('/notes')
    res.render('notes/new.hbs')
}

export const renderNotes = async (req: Request, res: Response) => {
    // @ts-ignore
    const notes: NoteInterface[] = await Note.find({user : req.user.id}).sort({createdAt : 'desc'});
    const notesDto =
        notes.map((note) => {
            return {
                title: note.title,
                description: note.description,
                id: note.id
            }
        });

    res.render('notes/allnotes', {
        notes: notesDto })
}

export const renderEditForm = async (req: Request, res: Response) => {
    const note: NoteInterface|null = await Note.findById(req.params.id);

    // @ts-ignore
    if (!note || note?.user !== req.user.id ) {
        let message = 'Dont authorized to edit that note.';

        if (!note){
            message = 'Not not found.';
        }
        req.flash('error_msg' , message)

        return res.redirect('/notes')
    }

    res.render("notes/edit-note", note);
}


export const renderUpdateNotes = async (req: Request, res: Response) => {
    const {title, description} = (req.body)
    await Note.findByIdAndUpdate(req.params.id, { title, description})
    req.flash('success_msg', "Your note has been updated successfully.")
    res.redirect('/notes')
}

export const renderDeleteNotes = async (req: Request, res: Response) => {
    await Note.findByIdAndDelete(req.params.id)
    req.flash('success_msg', "Your note has been deleted successfully.")
    res.redirect('/notes')
}
