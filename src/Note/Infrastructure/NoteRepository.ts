import {NoteRepositoryPort} from "../Application/Port/NoteRepositoryPort";
import {Note} from "../Domain/Note";
import NoteModel from "./NoteModel";
import {BaseRepositoryService} from "../../Shared/Infrastructure/Repository/BaseRepositoryService";
import {NoteInterface} from "./NoteModel";

export class NoteRepository extends BaseRepositoryService<NoteInterface> implements NoteRepositoryPort {
    static instance: NoteRepository;
    private constructor() {super(Note.CLASS_PATH, NoteModel);}

    static getInstance(): NoteRepository{
        if (!NoteRepository.instance){
            NoteRepository.instance = new NoteRepository();
        }
        return NoteRepository.instance;
    }
}