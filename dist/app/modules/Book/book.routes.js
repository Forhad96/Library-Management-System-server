"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = require("express");
const book_controllers_1 = require("./book.controllers");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.default)(book_validation_1.BookValidationSchemas.zBookSchema), book_controllers_1.BookControllers.createBook);
router.get('/', book_controllers_1.BookControllers.getAllBooks);
router.get('/:bookId', book_controllers_1.BookControllers.getBookById);
router.put('/:bookId', (0, validateRequest_1.default)(book_validation_1.BookValidationSchemas.zUpdateBookSchema), book_controllers_1.BookControllers.updateBook);
router.delete('/:bookId', book_controllers_1.BookControllers.deleteBook);
exports.BookRoutes = router;
