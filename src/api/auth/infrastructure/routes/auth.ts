// Dependencies
import {Application, NextFunction, Request, Router} from "express";

// Middlewares
import { catchErrors } from "../../../../shared/infraestructure/middlewares/async-error";

// Controllers
import {AuthController} from "../controllers/auth";

// Services
import {AuthService} from "../../application/auth-service";

// Repositories
import { AuthRepository } from "../persistence/auth";

// Interfaces
import {ICustomResponse} from "../../../../shared/infraestructure/middlewares/response/response-interface";

const controller = new AuthController(new AuthService(new AuthRepository()));

export const authRouter = (app: Application): void => {
    const router = Router();
    const basePath = '/auth';
    app.use(basePath, router);
    router.post('/login', catchErrors.handler((request: Request, response: ICustomResponse, next: NextFunction) => controller.login(request, response, next)));
}
