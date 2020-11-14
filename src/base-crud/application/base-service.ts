// Interfaces
import { IBaseService, PaginatorResponse } from "./base-service-interface";
import { IBaseRepository } from "../domain/repositories/base-repository";

export abstract class BaseService<T, U> implements IBaseService<T, U> {

    constructor(private readonly repository: IBaseRepository<T, U>) {
    }

    async create(data: T): Promise<U> {
        return this.repository.create(data);
    }

    async delete(id: number | string): Promise<U> {
        return this.repository.deleteOne(id);
    }

    async getAll(filters = {}): Promise<U[]> {
        return this.repository.findAll(filters);
    }

    async getByPage(filter: any = {}, page: number, pageSize: number): Promise<PaginatorResponse<U>> {
        return this.repository.paginator(filter, page, pageSize)
    }

    async getById(id: number | string): Promise<U> {
        return this.repository.findById(id);
    }

    async update(id: number | string, data: T): Promise<U> {
        return this.repository.updateOne(id, data);
    }


}
