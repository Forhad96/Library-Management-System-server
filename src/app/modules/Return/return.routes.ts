import { Router } from "express";
import { ReturnControllers } from "./return.controllers";

const router = Router();
router.post('/',ReturnControllers.returnBook)

export const ReturnRoutes = router;
