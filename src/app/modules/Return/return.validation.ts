import { z } from "zod";

const zReturnBookValidationSchema = z.object({
  body: z.object({
    borrowId: z.string({ required_error: "BorrowId is required" }),
  }),
});


export const returnValidationSchemas = {
    zReturnBookValidationSchema
}