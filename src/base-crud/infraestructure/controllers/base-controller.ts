// Dependencies
import { NextFunction, Request, Response } from 'express';

// Interfaces
import { IBaseService } from "../../application/base-service-interface";
import { IBaseController } from "./base-controller-interface";

export abstract class BaseController <T, U> implements IBaseController {

    constructor(private readonly baseService: IBaseService<T, U>) {}

    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const { body } = req;
            const response = await this.baseService.create(body);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const {
                params: { id },
            } = req;

            const response = await this.baseService.delete(+id);
            res.json(response);
        }
        catch (error) {
            next(error);
        }
    }

    public async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const response = await this.baseService.getAll();
            res.json(response);
        } catch (error) {
            next(error);
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const {
                params: { id },
            } = req;

            const response = await this.baseService.getById(+id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const {
                body,
                params: { id },
            } = req;

            const response = await this.baseService.update(+id, body);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
}
