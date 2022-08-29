import {AppCommand} from "./AppCommand";

export abstract class AppCommandHandler<T extends AppCommand> {
    abstract execute(T: AppCommand): void;
}
