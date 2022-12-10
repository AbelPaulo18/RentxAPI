import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./listSpecificationsUseCase";

export class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listSpecificationUseCase.execute();
    return response.status(200).send({ specifications: all });
  }
}
