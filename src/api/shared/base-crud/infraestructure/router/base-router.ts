// Dependencies
import { Router, Request, Response, NextFunction, Application } from 'express';

// Interfaces
import { ISchemaValidator } from "../../../../../shared/infraestructure/middlewares/schema-validator/schema-validator-interface";
import { IBaseController } from "../controllers/base-controller-interface";
import { ISchemaStructure, defaultSchema } from "./base-router-interface";

// Middlewares
import { catchErrors } from "../../../../../shared/infraestructure/middlewares/async-error";
import { schemaTransformer } from "../../../../../shared/infraestructure/middlewares/schema-transformer";
import { schemaValidator } from "../../../../../shared/infraestructure/middlewares/schema-validator";

export const baseRouter = (basePath: string, controller: IBaseController, schema: ISchemaStructure = {}): ((app: Application) => void) => {
    const schemaValidate: ISchemaStructure = {
        ...defaultSchema,
        ...schema,
    };

    const router = Router();
    return (app: Application): void => {
        app.use(basePath, router);

        router.get(
            '/',
            schemaValidator.handler(schemaValidate.get),
            schemaTransformer.handler<ISchemaValidator>(schemaValidate.get),
            catchErrors.handler((request: Request, response: Response, next: NextFunction) => controller.getAll(request, response, next)),
        );

        router.get(
            '/:id',
            schemaValidator.handler(schemaValidate.getById),
            schemaTransformer.handler<ISchemaValidator>(schemaValidate.getById),
            catchErrors.handler((request: Request, response: Response, next: NextFunction) => controller.getById(request, response, next)),
        );

        router.post(
            '/',
            schemaValidator.handler(schemaValidate.post),
            schemaTransformer.handler<ISchemaValidator>(schemaValidate.post),
            catchErrors.handler((request: Request, response: Response, next: NextFunction) => controller.create(request, response, next)),
        );

        router.put(
            '/:id',
            schemaValidator.handler(schemaValidate.put),
            schemaTransformer.handler<ISchemaValidator>(schemaValidate.put),
            catchErrors.handler((request: Request, response: Response, next: NextFunction) => controller.update(request, response, next)),
        );

        router.delete(
            '/:id',
            schemaValidator.handler(schemaValidate.delete),
            schemaTransformer.handler<ISchemaValidator>(schemaValidate.delete),
            catchErrors.handler((request: Request, response: Response, next: NextFunction) => controller.delete(request, response, next)),
        );
    };
};
