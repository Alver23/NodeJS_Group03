export interface IBaseRepository<T, U> {
    create(data: T): Promise<U>;
    deleteOne(id: string | number): Promise<U>;
    findAll(filter: any): Promise<U[]>;
    findById(id: string | number): Promise<U>;
    paginator(
        filter: any,
        page: number,
        pageSize: number
    ): Promise<IPaginatorResponse<U>>;
    updateOne(id: string | number, data: T): Promise<U>;
}

export interface IPaginatorResponse <U> {
    data: U[];
    total: number;
}
