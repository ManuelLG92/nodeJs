import {BaseRepositoryService} from "../../Shared/Infrastructure/Repository/BaseRepositoryService";
import UserModel, {UserInterface} from "./UserModel";
import {User} from "../Domain/User";
import {UserRepositoryPort} from "../Application/Port/UserRepositoryPort";

export class UserRepository extends BaseRepositoryService<UserInterface> implements UserRepositoryPort {
    constructor() {super(User.CLASS_PATH, UserModel);}
}