// Entities
import { IUser } from "../entities/user-entity";

// Shared
import { IBaseRepository } from "../../../shared/base-crud/domain/repositories/base-repository";

export interface IUserRepository extends  IBaseRepository<IUser, IUser> {}
