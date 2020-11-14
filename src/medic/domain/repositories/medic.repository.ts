// Interfaces
import { IBaseRepository } from "../../../base-crud/domain/repositories/base-repository";
// Entities
import { Medic } from "../entities/medic.entity";

export interface MedicRepository extends IBaseRepository<Medic, Medic> {
}
