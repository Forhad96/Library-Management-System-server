"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRoutes = void 0;
const express_1 = require("express");
const borrow_controllers_1 = require("./borrow.controllers");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const borrow_validation_1 = require("./borrow.validation");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(borrow_validation_1.BorrowValidationSchemas.zBorrowSchema), borrow_controllers_1.BorrowControllers.borrowBook);
router.get("/", borrow_controllers_1.BorrowControllers.getAllBorrowBooks);
router.get('/overdue', borrow_controllers_1.BorrowControllers.getOverdueBooks);
exports.BorrowRoutes = router;
