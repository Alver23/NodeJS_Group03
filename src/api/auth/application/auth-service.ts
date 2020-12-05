// Dependencies
import yenv from "yenv";
import { sign } from 'jsonwebtoken';

// Entities
import { IUser } from "../../user/domain/entities/user-entity";
import {IAuthRepository} from "../domain/repositories/auth";

const { JWT: { SECRET, EXPIRES } } = yenv();

export class AuthService {

    constructor(private readonly repository: IAuthRepository) {
    }

    public createToken(user: IUser) {
        const { _id, name, email, roles } = user;
        const payload = {
            sub: _id,
            name,
            email,
            roles,
        };

        return sign(payload, SECRET, { expiresIn: EXPIRES });
    }

    public async login(email: string): Promise<any> {
        return this.repository.login(email);
    }
}
