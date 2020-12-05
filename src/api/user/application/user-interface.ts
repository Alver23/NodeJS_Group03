// Entities
import { IUser } from "../domain/entities/user-entity";

// Shared
import { IBaseService } from "../../shared/base-crud/application/base-service-interface";

export interface IUserService extends IBaseService<IUser, IUser> {}
