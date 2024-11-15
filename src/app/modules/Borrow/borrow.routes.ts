import { Router } from "express";
import { BorrowControllers } from "./borrow.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { BorrowValidationSchemas } from "./borrow.validation";

const router = Router();

router.post(
  "/",
  validateRequest(BorrowValidationSchemas.zBorrowSchema),
  BorrowControllers.borrowBook
);
router.get("/", BorrowControllers.getAllBorrowBooks);

router.get('/overdue',BorrowControllers.getOverdueBooks)

export const BorrowRoutes = router;
