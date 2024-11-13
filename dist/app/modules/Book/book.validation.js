"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidationSchemas = void 0;
const zod_1 = require("zod");
const zBookSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().max(255),
        genre: zod_1.z.string(),
        publishedYear: zod_1.z.number().int(),
        totalCopies: zod_1.z.number().int(),
        availableCopies: zod_1.z.number().int(),
        // borrowRecord: z.array(z.lazy(() => BorrowRecordSchema)),
    }),
});
const zUpdateBookSchema = zod_1.z.object({
    body: zBookSchema.partial(), // Apply partial here to make all book properties optional
});
const BorrowRecordSchema = zod_1.z.object({
    recordId: zod_1.z.string().uuid(),
    borrowedDate: zod_1.z.date(),
    returnedDate: zod_1.z.date().optional(),
    bookId: zod_1.z.string().uuid(),
    userId: zod_1.z.string().uuid(),
});
exports.BookValidationSchemas = {
    zBookSchema,
    zUpdateBookSchema,
};
