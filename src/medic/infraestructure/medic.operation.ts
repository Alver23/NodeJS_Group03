// Entities
import { Medic } from "../domain/entities/medic.entity";

// Shared
import GenericDatabaseRepository from "../../base-crud/infraestructure/persintence/base-repository";

// Models
import MedicModel from './medic.model';

export class MedicOperation extends GenericDatabaseRepository<typeof MedicModel, Medic, Medic> {
  constructor() {
    super(MedicModel);
  }
}
