// Entities
import { Driver } from "../../domain/entities/driver-entity";
import { BaseController } from "../../../shared/base-crud/infraestructure/controllers/base-controller";
import { IDriverService }  from "../../application/driver-interface";

export class DriverController extends BaseController<Driver, Driver> {
    constructor(service: IDriverService) {
        super(service);
    }
}
