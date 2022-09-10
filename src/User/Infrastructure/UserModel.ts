import {Schema, model} from "mongoose";

export interface UserInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<UserInterface>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true},
});


const UserModel = model<UserInterface>("User", UserSchema);

export default UserModel;