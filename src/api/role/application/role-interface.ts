// Entities
import { IRole } from "../domain/entities/role-entity";

// Shared
import { IBaseService } from "../../shared/base-crud/application/base-service-interface";

export interface IRoleService extends IBaseService<IRole, IRole> {}
