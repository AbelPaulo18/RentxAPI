import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { ListCategoryController } from "./listCategoriesController";
import { ListCategoryUseCase } from "./listCategoryUseCase";

const categoriesRepository = CategoryRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
