// Entities
import { Driver } from "../../domain/entities/driver-entity";

// shared
import GenericDatabaseRepository from "../../../base-crud/infraestructure/persintence/base-repository";

// Scheme
import DriverScheme from './../schema/driver';


export class DriverRepository extends GenericDatabaseRepository<typeof DriverScheme, Driver, Driver> {
    constructor() {
        super(DriverScheme);
    }
}
