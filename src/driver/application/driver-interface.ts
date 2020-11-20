// Entities
import { Driver } from "../domain/entities/driver-entity";
import { IBaseService } from "../../base-crud/application/base-service-interface";

export interface IDriverService extends IBaseService<Driver, Driver> {}
