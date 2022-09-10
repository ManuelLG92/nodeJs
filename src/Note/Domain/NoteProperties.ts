import BaseProperties from "../../Shared/Domain/Constants/BaseProperties";

enum NotePropertiesInterface {
    note = "note",
    id = "id",
    user = "user",
    title = "title",
    description = "description",
    town = "town",
    postalCode = "postalCode",
}

const NoteProperties = {...NotePropertiesInterface, ...BaseProperties};

export default NoteProperties;
