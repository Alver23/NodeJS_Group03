// Dependencies
import yenv from "yenv";
import passport from 'passport';
import { unauthorized } from '@hapi/boom';
import { Strategy, ExtractJwt } from 'passport-jwt';

import { UserRepository } from "../../../api/user/infrastructure/persistence/user-repository";

import { HttpMessages } from "../../utils/messages/http-messages";

const userRepository = new UserRepository();

const { JWT: { SECRET } } = yenv()

passport.use(
    new Strategy(
        {
            secretOrKey: SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
        async (payload: any, cb: any) => {
            try {
                const { email } = payload;
                const [user] = await userRepository.findAll({ email });
                if (!user) {
                    return cb(unauthorized(HttpMessages.UNAUTHORIZED));
                }
                const { _id, name, email: userEmail, roles } = user;
                return cb(null, { _id, name, email: userEmail, roles });
            } catch (error) {
                cb(error);
            }
        },
    ),
);
