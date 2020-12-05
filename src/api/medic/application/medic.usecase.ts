// Shared
import { BaseService } from "../../shared/base-crud/application/base-service";

import { Medic } from "../domain/entities/medic.entity";
import { MedicRepository } from "../domain/repositories/medic.repository";

export class MedicUseCase extends BaseService<Medic, Medic> {
  constructor(repository: MedicRepository) {
    super(repository);
  }
}
