// Interfaces
import { IBaseRepository } from "../../../shared/base-crud/domain/repositories/base-repository";

// Entities
import { IRole } from "../entities/role-entity";

export interface IRoleRepository extends IBaseRepository<IRole, IRole> {

}
