import { Router } from "express";
import { BookControllers } from "./book.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { BookValidationSchemas } from "./book.validation";

const router = Router()


router.post('/',validateRequest(BookValidationSchemas.zBookSchema) ,BookControllers.createBook)
router.get('/:bookId',BookControllers.getBookById)




export const BookRoutes = router