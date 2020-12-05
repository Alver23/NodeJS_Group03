// Models
import UserModel from './../../../user/infrastructure/schema/user';
import {IAuthRepository} from "../../domain/repositories/auth";

export class AuthRepository implements IAuthRepository {
    async login(email: string) {
        return UserModel
            .findOne({ email })
            .populate('roles');
    }
}
