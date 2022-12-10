import { Category } from "../../../model/Category";
import { CategoryRepository } from "../../../repositories/CategoryRepository";

export class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}
