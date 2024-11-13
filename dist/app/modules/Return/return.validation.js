"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnValidationSchemas = void 0;
const zod_1 = require("zod");
const zReturnBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z.string({ required_error: "BorrowId is required" }),
    }),
});
exports.returnValidationSchemas = {
    zReturnBookValidationSchema
};
