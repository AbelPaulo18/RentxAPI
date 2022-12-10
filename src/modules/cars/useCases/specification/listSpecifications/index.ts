import { SpecificationRepository } from "../../../repositories/SpecificationRepository";
import { ListSpecificationController } from "./listSpecificationsController";
import { ListSpecificationUseCase } from "./listSpecificationsUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationUseCase(
  specificationRepository
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationsUseCase
);

export { listSpecificationController };
