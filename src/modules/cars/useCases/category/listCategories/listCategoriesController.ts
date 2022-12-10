import { Response, Request } from "express";
import { ListCategoryUseCase } from "./listCategoryUseCase";

export class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCategoryUseCase.execute();
    return response.status(200).send({
      all,
    });
  }
}
