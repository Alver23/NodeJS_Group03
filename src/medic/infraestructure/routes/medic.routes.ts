
import { MedicOperation } from "../persistence/medic.operation";
import { MedicUseCase } from "../../application/medic.usecase";
import { MedicController } from "../controllers/medic.controller";

const medicOperation = new MedicOperation();
const medicUseCase = new MedicUseCase(medicOperation);
const medicController = new MedicController(medicUseCase);

// Shared
import { baseRouter } from "../../../base-crud/infraestructure/router/base-router";

// DTO's
import { MedicDto } from "../dto/driver";

const basePath = '/medics';
export const medicRouter = baseRouter(basePath, medicController, MedicDto, MedicDto);
