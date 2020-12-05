// Dependencies
import { NextFunction, Request, Response } from 'express';

export interface IBaseController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<any>;
    getById(req: Request, res: Response, next: NextFunction): Promise<any>;
    create(req: Request, res: Response, next: NextFunction): Promise<any>;
    update(req: Request, res: Response, next: NextFunction): Promise<any>;
    delete(req: Request, res: Response, next: NextFunction): Promise<any>;
}
