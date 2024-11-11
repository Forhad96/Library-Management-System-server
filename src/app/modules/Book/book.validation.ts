import { z } from "zod";

const zBookSchema = z.object({
  body: z.object({
    title: z.string().max(255),
    genre: z.string(),
    publishedYear: z.number().int(),
    totalCopies: z.number().int(),
    availableCopies: z.number().int(),
    // borrowRecord: z.array(z.lazy(() => BorrowRecordSchema)),
  }),
});

const zUpdateBookSchema = z.object({
  body: zBookSchema.partial(), // Apply partial here to make all book properties optional
});

const BorrowRecordSchema = z.object({
  recordId: z.string().uuid(),
  borrowedDate: z.date(),
  returnedDate: z.date().optional(),
  bookId: z.string().uuid(),
  userId: z.string().uuid(),
});

export const BookValidationSchemas = {
  zBookSchema,
  zUpdateBookSchema,
};
