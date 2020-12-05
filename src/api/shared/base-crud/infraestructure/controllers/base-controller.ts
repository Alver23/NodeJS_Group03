// Dependencies
import {CREATED, NO_CONTENT} from "http-status-codes";
import { NextFunction, Request } from 'express';

// Interfaces
import { IBaseService } from "../../application/base-service-interface";
import { IBaseController } from "./base-controller-interface";
import { ICustomResponse } from "../../../../../shared/infraestructure/middlewares/response/response-interface";

// Utils
import { HttpMessages } from "../../../../../shared/utils/messages/http-messages";


export abstract class BaseController <T, U> implements IBaseController {

    constructor(private readonly baseService: IBaseService<T, U>) {}

    public async create(req: Request, res: ICustomResponse, next: NextFunction): Promise<any> {
        const { body } = req;
        const response = await this.baseService.create(body);
        res.responseJson({ message: HttpMessages.CREATED, data: response, status: CREATED });
    }

    public async delete(req: Request, res: ICustomResponse, next: NextFunction): Promise<any> {
        const {
            params: { id },
        } = req;

        const response = await this.baseService.delete(id);
        res.responseJson({ message: HttpMessages.UPDATED, data: response, status: NO_CONTENT });
    }

    public async getAll(req: Request, res: ICustomResponse, next: NextFunction): Promise<any> {
        const response = await this.baseService.getAll();
        res.responseJson({ data: response, message: HttpMessages.LISTS });
    }

    public async getById(req: Request, res: ICustomResponse, next: NextFunction): Promise<any> {
        const {
            params: { id },
        } = req;

        const response = await this.baseService.getById(id);
        res.responseJson({ data: response });
    }

    public async update(req: Request, res: ICustomResponse, next: NextFunction): Promise<any> {
        const {
            body,
            params: { id },
        } = req;

        const response = await this.baseService.update(id, body);
        res.responseJson({ message: HttpMessages.UPDATED, data: response });
    }
}
