// Shared
import { baseRouter } from "../../../shared/base-crud/infraestructure/router/base-router";

// Controllers
import { UserController } from "../controllers/user-controller";

// Services
import { UserService } from "../../application/user-service";

// Repository
import { UserRepository } from "../persistence/user-repository";

// DTO's
import { User } from "../dto/user";

const basePath = '/users';

const service = new UserService(new UserRepository());
const controller = new UserController(service);

const schema = {
    post: {
        body: User,
    },
    put: {
        body: User,
    },
};

export const userRouter = baseRouter(basePath, controller, schema);
