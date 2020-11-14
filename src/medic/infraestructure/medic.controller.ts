// Entities
import { Medic } from "../domain/entities/medic.entity";

// Shared
import {BaseController} from "../../base-crud/infraestructure/controllers/base-controller";
import { IBaseService } from "../../base-crud/application/base-service-interface";

export class MedicController extends BaseController<Medic, Medic> {
  constructor(service: IBaseService<Medic, Medic>) {
    super(service);
  }
}
