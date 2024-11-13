"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const appError_1 = __importDefault(require("../../errors/appError"));
const returnBook = (Payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const borrowRecord = yield transactionClient.borrowRecord.findUniqueOrThrow({
            where: {
                borrowId: Payload.borrowId,
            },
        });
        if (!borrowRecord) {
            throw new appError_1.default(404, "Borrow record not found");
        }
        if (borrowRecord.returnDate) {
            throw new appError_1.default(400, "This book has already been returned");
        }
        yield transactionClient.borrowRecord.update({
            where: { borrowId: Payload.borrowId },
            data: { returnDate: new Date() },
        });
        yield transactionClient.book.update({
            where: { bookId: borrowRecord.bookId },
            data: { availableCopies: { increment: 1 } },
        });
    }));
});
exports.ReturnServices = {
    returnBook,
};
