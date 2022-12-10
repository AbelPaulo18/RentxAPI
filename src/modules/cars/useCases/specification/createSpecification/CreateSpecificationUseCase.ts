import { ISpecificationRepository } from "../../../repositories/SpecificationRepository/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ description, name }: IRequest): void {
    const specificationAlreadyExist =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExist)
      throw new Error("Specification Already Exists!");

    this.specificationsRepository.create({ description, name });
  }
}
