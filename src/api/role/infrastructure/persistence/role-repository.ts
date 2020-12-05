// Entities
import { IRole } from "../../domain/entities/role-entity";

// Shared
import GenericDatabaseRepository from "../../../shared/base-crud/infraestructure/persintence/base-repository";

// Schema
import RoleSchema from '../schema/role';

export class RoleRepository extends GenericDatabaseRepository<typeof RoleSchema, IRole, IRole> {
    constructor() {
        super(RoleSchema);
    }
}
