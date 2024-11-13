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
exports.BorrowServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const appError_1 = __importDefault(require("../../errors/appError"));
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const book = yield transactionClient.book.findUniqueOrThrow({
            where: {
                bookId: payload.bookId,
            },
        });
        if (book.availableCopies <= 0) {
            throw new appError_1.default(404, "No available copies of the book");
        }
        yield transactionClient.member.findUniqueOrThrow({
            where: { memberId: payload.memberId },
        });
        const existingBorrow = yield transactionClient.borrowRecord.findFirst({
            where: {
                memberId: payload.memberId,
                bookId: payload.bookId,
            },
        });
        if (existingBorrow) {
            throw new appError_1.default(400, "Member has already borrowed a copy of this book");
        }
        const result = yield transactionClient.borrowRecord.create({
            data: payload,
        });
        yield transactionClient.book.update({
            where: { bookId: payload.bookId },
            data: { availableCopies: { decrement: 1 } },
        });
        return result;
    }));
});
const getAllBorrowBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.findMany();
    return result;
});
const getOverdueBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const overdueThreshold = new Date();
    overdueThreshold.setDate(overdueThreshold.getDate() - 14);
    // Query overdue records
    const overdueRecords = yield prisma_1.default.borrowRecord.findMany({
        where: {
            returnDate: null, // Book not returned
            borrowDate: { lt: overdueThreshold }, // Borrowed more than 14 days ago
        },
        include: {
            book: { select: { title: true } },
            member: { select: { name: true } },
        },
    });
    // Map the results to include overdue days
    return overdueRecords.map((record) => {
        const borrowDate = new Date(record.borrowDate).getTime();
        console.log({ borrowDate });
        const currentDate = new Date().getTime();
        // Calculate overdue days by dividing the milliseconds difference by the number of milliseconds in a day
        const overdueDays = Math.floor((currentDate - borrowDate) / (1000 * 60 * 60 * 24)) - 14;
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays,
        };
    });
});
exports.BorrowServices = {
    borrowBook,
    getAllBorrowBooks,
    getOverdueBooks
};
