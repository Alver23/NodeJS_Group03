// Entities
import { Driver } from "../entities/driver-entity";

// Repositories
import { IBaseRepository } from "../../../base-crud/domain/repositories/base-repository";

export interface DriverRepository extends IBaseRepository<Driver, Driver> {}
