import {  baseRouter } from "../../../shared/base-crud/infraestructure/router/base-router";
import { DriverController } from "../controllers/driver";
import { DriverService } from "../../application/driver-service";
import { DriverRepository } from "../persitence/driver-repository";

// DTO's
import { DriverDto } from "../dto/driver";

const basePath = '/drivers';

const repository = new DriverRepository();
const service = new DriverService(repository);
const controller = new DriverController(service);

const schema = {
    post: {
        body: DriverDto,
    },
    put: {
        body: DriverDto,
    },
};

export const driverRouter = baseRouter(basePath, controller, schema);
