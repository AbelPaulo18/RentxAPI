import { Router } from "express";
import { categoryRouter } from "./categories/categories.routes";
import { specificationRouter } from "./specifications/specification.routes";

const router = Router();

router.use("/categories", categoryRouter);
router.use("/specifications", specificationRouter);

export { router };
