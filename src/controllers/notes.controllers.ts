// import NoteModel, {NoteInterface} from '../Note/Infrastructure/NoteModel'
// import {Request, Response} from "express";
// import {CreateNoteCommand} from "../Note/Application/Create/CreateNoteCommand";
// import {CreateNoteCommandHandler} from "../Note/Application/Create/CreateNoteCommandHandler";
// import {NoteRepository} from "../Note/Infrastructure/NoteRepository";
// import {IdValueObject} from "../Shared/Domain/ValueObjects";
// import {Note} from "../Note/Domain/Note";
//
// export const renderNoteForm = (_req: Request, res: Response) => {
//     res.render('notes/new.hbs')
// }
//
// // export const renderNewNote = async (req: Request, res: Response) => {
// //
// //     console.log(req.body);
// //
// //     const {title, description, id}:{title: string; description: string; id: string} = (req.body)
// //     const command = CreateNoteCommand.create({title, description});
// //     const handler = new CreateNoteCommandHandler();
// //     const persistence = new NoteRepository();
// //     const item = await persistence.findOne(IdValueObject.create(id) as unknown as IdValueObject) as unknown as Note;
// //     //console.log('item fetched', item);
// //     console.log('item serialize', item?.serialize());
// //
// //     const response = {
// //         id: item?.id().value(),
// //         user: item.user().value(),
// //         title: item.title().value(),
// //         description: item.description().value(),
// //     }
// //     return res.status(201).json(response).end();
// //     // await handler.execute(command);
// //      console.log('done');
// //
// //
// //     // const newNote = new Note({ title, description, user: '630aa046d1606ab304cf7ae4', createdAt: new Date(),  updatedAt: new Date()})
// //     // // @ts-ignore
// //     // //newNote.user = '630aa046d1606ab304cf7ae4';
// //     // // console.log(req.body, title, description)
// //     // // process.exit(1)
// //     // await newNote.save();
// //     // req.flash('success_msg', "Your note has been added successfully.")
// //     // res.redirect('/notes')
// //     // res.render('notes/new.hbs')
// // }
//
// export const renderNotes = async (req: Request, res: Response) => {
//     // @ts-ignore
//     const notes: NoteInterface[] = await NoteModel.find({user : req.user.id}).sort({createdAt : 'desc'});
//     const notesDto =
//         notes.map((note) => {
//             return {
//                 title: note.title,
//                 description: note.description,
//                 id: note.id
//             }
//         });
//
//     res.render('notes/allnotes', {
//         notes: notesDto })
// }
//
// export const renderEditForm = async (req: Request, res: Response) => {
//     const note: NoteInterface|null = await NoteModel.findById(req.params.id);
//
//     // @ts-ignore
//     if (!note || note?.user !== req.user.id ) {
//         let message = 'Dont authorized to edit that note.';
//
//         if (!note){
//             message = 'Not not found.';
//         }
//
//         req.flash('error_msg' , message)
//
//         return res.redirect('/notes')
//     }
//
//     res.render("notes/edit-note", note);
// }
//
//
// export const renderUpdateNotes = async (req: Request, res: Response) => {
//     const {title, description} = (req.body)
//     await NoteModel.findByIdAndUpdate(req.params.id, { title, description})
//     req.flash('success_msg', "Your note has been updated successfully.")
//     res.redirect('/notes')
// }
//
// export const renderDeleteNotes = async (req: Request, res: Response) => {
//     await NoteModel.findByIdAndDelete(req.params.id)
//     req.flash('success_msg', "Your note has been deleted successfully.")
//     res.redirect('/notes')
// }
