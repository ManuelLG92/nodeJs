import { Schema, model } from 'mongoose';
export interface NoteInterface {
    id: string;
    title: string;
    description: string;
    user: string;
    createdAt: Date;
    updatedAt: Date;
}
const noteSchema = new Schema<NoteInterface>({
    title : {type: String, required: true},
    description : {type: String, required: true},
    user : {type: String, required: true},
    createdAt : {type: Date, required: true},
    updatedAt : {type: Date, required: true},
}, {timestamps: true})

const Note = model<NoteInterface>('Note', noteSchema);

export default Note;

