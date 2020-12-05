// Entities
import { IRole } from "../../domain/entities/role-entity";

// Interfaces
import { IRoleService } from "../../application/role-interface";

// Shared
import { BaseController } from "../../../shared/base-crud/infraestructure/controllers/base-controller";

export class RoleController extends BaseController<IRole, IRole> {
    constructor(service: IRoleService) {
        super(service);
    }
}
