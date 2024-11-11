import { Router } from "express";
import { BookControllers } from "./book.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { BookValidationSchemas } from "./book.validation";

const router = Router()


router.post('/',validateRequest(BookValidationSchemas.zBookSchema) ,BookControllers.createBook)
router.get('/:bookId',BookControllers.getBookById)
router.patch('/:bookId',BookControllers.updateBook)
router.delete('/:bookId',BookControllers.deleteBook)




export const BookRoutes = router