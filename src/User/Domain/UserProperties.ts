import BaseProperties from "../../Shared/Domain/Constants/BaseProperties";

enum UserPropertiesInterface {
    id = 'id',
    name = 'name',
    email = 'email',
    password = 'password',
}

const UserProperties = {...UserPropertiesInterface, ...BaseProperties}

export default UserProperties;
