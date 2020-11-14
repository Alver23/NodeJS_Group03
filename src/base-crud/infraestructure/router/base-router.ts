// Dependencies
import { Router, Request, Response, NextFunction, Application } from 'express';

// Models
import { IBaseController } from "../controllers/base-controller-interface";

export const baseRouter = (basePath: string, controller: IBaseController): any => {
    const router = Router();
    return (app: Application): void => {
        app.use(basePath, router);

        router.get('/', (request: Request, response: Response, next: NextFunction) => controller.getAll(request, response, next));

        router.get('/:id', (request: Request, response: Response, next: NextFunction) => controller.getById(request, response, next));

        router.post('/', (request: Request, response: Response, next: NextFunction) => controller.create(request, response, next));

        router.put('/:id', (request: Request, response: Response, next: NextFunction) => controller.update(request, response, next));

        router.delete('/:id', (request: Request, response: Response, next: NextFunction) => controller.delete(request, response, next));
    };
};
