// Dependencies
import passport from 'passport';
import { unauthorized } from '@hapi/boom';
import { CREATED } from 'http-status-codes';
import { NextFunction, Request } from 'express';

// Entities
import { IUser } from "../../../user/domain/entities/user-entity";

// Interfaces
import { IAuthService } from "../../application/auth-service-interface";

// Utils
import { HttpMessages } from "../../../../shared/utils/messages/http-messages";
import { ICustomResponse } from "../../../../shared/infraestructure/middlewares/response/response-interface";

// Strategies
import './../../../../shared/infraestructure/strategies/basic';

export class AuthController {
    constructor(private readonly service: IAuthService) {}

    public async login(req: Request, res: ICustomResponse, next: NextFunction): Promise<any> {
        return passport.authenticate('basic', (error: any, user: IUser) => {
            if (error || !user) {
                return next(unauthorized(HttpMessages.UNAUTHORIZED));
            }
            return req.login(user, { session: false }, async (errorLogin: any) => {
                if (errorLogin) {
                    return next(errorLogin);
                }

                const token = this.service.createToken(user);
                res.responseJson({ data: { token, refreshToken: user.refreshToken }});
            });
        })(req, res, next);
    }
}
