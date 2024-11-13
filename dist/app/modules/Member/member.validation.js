"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersValidationSchemas = void 0;
const zod_1 = require("zod");
const zMemberSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        phone: zod_1.z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone format"),
        membershipDate: zod_1.z.string().datetime().optional(),
    }),
});
const zUpdateMemberSchema = zod_1.z.object({
    body: zMemberSchema.partial(),
});
exports.MembersValidationSchemas = {
    zMemberSchema,
    zUpdateMemberSchema,
};
