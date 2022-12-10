import { ICategoryRepository } from "../../../repositories/CategoryRepository/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("Category Already Exists!");

    this.categoriesRepository.create({ name, description });
  }
}
