import { Specification } from "../../../model/Specification";
import { SpecificationRepository } from "../../../repositories/SpecificationRepository";

export class ListSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}
