// Shared
import {  baseRouter } from "../../../shared/base-crud/infraestructure/router/base-router";

// Controllers
import { RoleController } from "../controllers/role-controller";

// Services
import { RoleService } from "../../application/role-service";

// Repository
import { RoleRepository } from "../persistence/role-repository";

// DTO's
import { Role } from "../dto/role";

const basePath = '/roles';

const service = new RoleService(new RoleRepository());
const controller = new RoleController(service);

const schema = {
    post: {
        body: Role,
    },
    put: {
        body: Role,
    },
};

export const roleRouter = baseRouter(basePath, controller, schema);
