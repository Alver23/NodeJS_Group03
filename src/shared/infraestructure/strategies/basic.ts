// Dependencies
import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { unauthorized } from '@hapi/boom';
import { compare } from 'bcrypt';

// Repositories
import { AuthRepository } from "../../../api/auth/infrastructure/persistence/auth";

import { HttpMessages } from "../../utils/messages/http-messages";

const repository = new AuthRepository();

passport.use(
    new BasicStrategy(async (email: string, password: string, cb: any) => {
        try {
            const user = await repository.login(email);

            if (!user) {
                return cb(unauthorized(HttpMessages.UNAUTHORIZED));
            }

            const { password: userPassword, _id, name, email: userEmail, refreshToken, roles } = user;
            if (!(await compare(password, userPassword))) {
                return cb(unauthorized(HttpMessages.UNAUTHORIZED));
            }

            const newRoles = roles.map(({ name }: any) => name);

            return cb(null, { name, email: userEmail, refreshToken, roles: newRoles });
        } catch (error) {
            return cb(error);
        }
    }),
);
