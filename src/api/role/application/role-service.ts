// Respositories
import { IRoleRepository } from "../domain/repositories/role-repository";

// Entities
import { IRole } from "../domain/entities/role-entity";

// Shared
import { BaseService } from "../../shared/base-crud/application/base-service";

export class RoleService extends BaseService<IRole, IRole> {
    constructor(repository: IRoleRepository) {
        super(repository);
    }
}
