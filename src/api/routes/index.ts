// Dependencies
import { Application } from 'express';

// Routes
import { medicRouter } from "../medic/infraestructure/routes/medic.routes";
import { driverRouter } from "../driver/infraestructure/routes/driver";
import { roleRouter } from "../role/infrastructure/routes/role";
import { userRouter } from "../user/infrastructure/routes/user";
import { authRouter } from "../auth/infrastructure/routes/auth";

// Middlewares
import { authentication } from "../../shared/infraestructure/middlewares/guards/authentication";

export class RouteConfig {
    constructor(private readonly app: Application) {}

    public publicRoutes(): void {
        authRouter(this.app);
        userRouter(this.app);
    }

    public privateRoutes(): void {
        this.app.use(authentication.handler());
        medicRouter(this.app);
        driverRouter(this.app);
        roleRouter(this.app);
    }
}
