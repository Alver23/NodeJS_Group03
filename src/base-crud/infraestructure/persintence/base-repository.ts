// Dependencies
import { Model } from "mongoose";

// Interfaces
import { IBaseRepository, IPaginatorResponse} from "./../../domain/repositories/base-repository";

export default abstract class GenericDatabaseRepository<K extends Model<any>, T, U> implements IBaseRepository<T, U> {

    constructor(private model: K) {
    }

    async create(data: T): Promise<U> {
        return this.model.create(data);
    }

    async deleteOne(id: string | number): Promise<U> {
        console.log('id', id);
        return this.updateOne(id, { isActive: false } as any);
    }

    async findAll(filter: any): Promise<U[]> {
        return this.model.find(filter);
    }

    async findById(id: string | number): Promise<U> {
        return this.model.findById(id);
    }

    async paginator(filter: any, page: number, pageSize: number): Promise<IPaginatorResponse<U>> {
        const data: U[] = await this.model
            .find(filter)
            .skip(page * pageSize)
            .limit(pageSize);

        const total: number = await this.model.find(filter).count();

        return { total, data };
    }

    async updateOne(id: string | number, data: T): Promise<U> {
       return this.model.findByIdAndUpdate(id, data, { new: true });
    }
}
