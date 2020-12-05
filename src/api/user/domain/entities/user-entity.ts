export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    isActive?: boolean;
    refreshToken?: string;
    roles: string[];
}
