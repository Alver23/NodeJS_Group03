// Entities
import { Driver } from "../domain/entities/driver-entity";
import { IBaseService } from "../../shared/base-crud/application/base-service-interface";

export interface IDriverService extends IBaseService<Driver, Driver> {}
