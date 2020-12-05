// Entities
import { IUser } from "../../domain/entities/user-entity";

// Shared
import GenericDatabaseRepository from "../../../shared/base-crud/infraestructure/persintence/base-repository";

// Schema
import UserSchema from './../schema/user';

export class UserRepository extends GenericDatabaseRepository<typeof UserSchema, IUser, IUser> {
    constructor() {
        super(UserSchema);
    }
}
