// Entities
import { IUser } from "../../user/domain/entities/user-entity";


export interface IAuthService {
    createToken(user: IUser): any;
    login(email: string): Promise<any>;
}
