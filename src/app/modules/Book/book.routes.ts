import { Router } from "express";
import { BookControllers } from "./book.controllers";

const router = Router()


router.post('/',BookControllers.createBook)





export const BookRoutes = router