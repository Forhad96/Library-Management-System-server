import { z } from "zod";

const zBorrowSchema = z.object({
  body: z.object({
    bookId: z.string(),
    memberId: z.string(),
  }),
});

export const BorrowValidationSchemas = {
  zBorrowSchema,
};
