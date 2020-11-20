// Repositories
import { DriverRepository } from "../domain/repositories/driver-repository";

// Entities
import { Driver } from "../domain/entities/driver-entity";

// Shared
import { BaseService } from "../../base-crud/application/base-service";


export class DriverService extends BaseService<Driver, Driver> {
    constructor(repository: DriverRepository) {
        super(repository);
    }
}
