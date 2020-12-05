// Dependencies
import { hash } from 'bcrypt';
import { uid } from 'rand-token';

// Entities
import { IUser } from "../domain/entities/user-entity";

// Repositories
import { IUserRepository } from "../domain/repositories/user-repository";

// Shared
import { BaseService } from "../../shared/base-crud/application/base-service";

export class UserService extends BaseService<IUser, IUser> {

    private readonly saltRound = 10;

    constructor(repository: IUserRepository) {
        super(repository);
    }

    private async hashedPassword(password: string): Promise<string> {
        return hash(password, this.saltRound);
    }

    async create(data: IUser): Promise<IUser> {
        const hashedPassword = await this.hashedPassword(data.password);
        const refreshToken = uid(256);
        return super.create({...data, password: hashedPassword, refreshToken });
    }
}
