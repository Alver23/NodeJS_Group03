export interface IDatabaseRepository {
    initialize(): Promise<any>;
    disconnect(): void;
}
