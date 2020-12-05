// Entities
import { IUser } from "../../../user/domain/entities/user-entity";

export interface IAuthRepository {
    // createToken(user: IUser): any;
    login(email: string): Promise<any>;
}
