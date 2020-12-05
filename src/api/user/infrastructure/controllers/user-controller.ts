// Entities
import { IUser } from "../../domain/entities/user-entity";

// Shared
import { BaseController } from "../../../shared/base-crud/infraestructure/controllers/base-controller";

// Interfaces
import {IUserService} from "../../application/user-interface";

export class UserController extends BaseController<IUser, IUser> {
    constructor(service: IUserService) {
        super(service);
    }
}
