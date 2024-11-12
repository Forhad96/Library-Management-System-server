import { Router } from "express";
import { ReturnControllers } from "./return.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { returnValidationSchemas } from "./return.validation";

const router = Router();
router.post(
  "/",
  validateRequest(returnValidationSchemas.zReturnBookValidationSchema),
  ReturnControllers.returnBook
);

export const ReturnRoutes = router;
