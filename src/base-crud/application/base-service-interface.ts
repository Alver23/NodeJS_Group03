export interface PaginatorResponse<U> {
    total: number;
    data: U[];
}

export interface IBaseService<T, U> {
    create(data: T): Promise<U>;
    delete(id: number | string): Promise<U>;
    getAll(): Promise<U[]>;
    getById(id: number | string): Promise<U>;
    update(id: number | string, data: T): Promise<U>;
    getByPage(filter: any, page: number, pageSize: number): Promise<PaginatorResponse<U>>
}
