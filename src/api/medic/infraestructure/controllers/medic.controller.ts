// Entities
import { Medic } from "../../domain/entities/medic.entity";

// Shared
import {BaseController} from "../../../shared/base-crud/infraestructure/controllers/base-controller";
import { IBaseService } from "../../../shared/base-crud/application/base-service-interface";

export class MedicController extends BaseController<Medic, Medic> {
  constructor(service: IBaseService<Medic, Medic>) {
    super(service);
  }
}
