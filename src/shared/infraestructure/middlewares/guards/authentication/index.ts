// Dependencies
import passport from 'passport';
import { unauthorized } from '@hapi/boom';
import { Request, RequestHandler, Response, NextFunction } from 'express';

// Entities
import { IUser } from "../../../../../api/user/domain/entities/user-entity";

// Utils
import { HttpMessages } from "../../../../utils/messages/http-messages";

// Strategies
import './../../../strategies/jwt';

export class Authentication {
    handler(): RequestHandler {
        return (req: Request, res: Response, next: NextFunction): void => {
            passport.authenticate('jwt', (error: any, user: IUser) => {
                if (error || !user) {
                    return next(unauthorized(HttpMessages.UNAUTHORIZED));
                }

                req.login(user, { session: false }, (errorLogin) => {
                    if (errorLogin) {
                        return next(errorLogin);
                    }

                    req.user = user;
                    next();
                });
            })(req, res, next);
        }
    }
}

export const authentication = new Authentication();
