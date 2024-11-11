import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";
import AppError from "../../errors/appError";

const returnBook = async (Payload: BorrowRecord) => {
  await prisma.$transaction(async (transactionClient) => {
    const borrowRecord = await transactionClient.borrowRecord.findUniqueOrThrow(
      {
        where: {
          borrowId:Payload.borrowId,
        },
      }
    );

    if (!borrowRecord) {
      throw new AppError(404, "Borrow record not found");
    }

    if (borrowRecord.returnDate) {
      throw new AppError(400, "This book has already been returned");
    }
    await transactionClient.borrowRecord.update({
      where: { borrowId: Payload.borrowId },
      data: { returnDate: new Date() },
    });
    await transactionClient.book.update({
      where: { bookId: borrowRecord.bookId },
      data: { availableCopies: { increment: 1 } },
    });
  });
};

export const ReturnServices = {
  returnBook,
};
