import { z } from "zod";

const zMemberSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone format"),
    membershipDate: z.string().datetime(),
  }),
});

export const MembersValidationSchemas = {
  zMemberSchema,
};