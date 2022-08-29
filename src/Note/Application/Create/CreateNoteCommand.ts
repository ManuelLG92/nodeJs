import {StringNullableValueObject, StringValueObject} from "../../../Shared/Domain/ValueObjects";
import {AppCommand} from "../../../Shared/Domain/Entity/AppCommand";

interface CreateNoteInterfaceOut {
    title: string;
    description?: string;
}

export class CreateNoteCommand extends AppCommand{
    constructor(
        public readonly title: StringValueObject,
        public readonly description: StringNullableValueObject,
    ) 
    {
        super();
    }
    
    static create(createNoteDto: CreateNoteInterfaceOut){
        return new CreateNoteCommand(
            StringValueObject.create(createNoteDto.title),
            StringNullableValueObject.create(createNoteDto.description)
        )
    }
}