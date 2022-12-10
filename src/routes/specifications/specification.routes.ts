import { Router } from "express";
import { SpecificationRepository } from "../../modules/cars/repositories/SpecificationRepository";
import { createCategoryController } from "../../modules/cars/useCases/category/createCategory";
import { createSpecificationController } from "../../modules/cars/useCases/specification/createSpecification";
import { CreateSpecificationUseCase } from "../../modules/cars/useCases/specification/createSpecification/CreateSpecificationUseCase";
import { listSpecificationController } from "../../modules/cars/useCases/specification/listSpecifications";

const specificationRouter = Router();

const specificationRepository = new SpecificationRepository();

specificationRouter.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRouter.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRouter };
