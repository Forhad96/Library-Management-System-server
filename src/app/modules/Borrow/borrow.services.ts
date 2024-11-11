import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";
import AppError from "../../errors/appError";

const borrowBook = async (payload: BorrowRecord) => {
  return await prisma.$transaction(async (transactionClient) => {
    const book = await transactionClient.book.findUniqueOrThrow({
      where: {
        bookId: payload.bookId,
      },
    });

    if (book.availableCopies <= 0) {
      throw new AppError(404, "No available copies of the book");
    }

    await transactionClient.member.findUniqueOrThrow({
      where: { memberId: payload.memberId },
    });
    const existingBorrow = await transactionClient.borrowRecord.findFirst({
      where: {
        memberId: payload.memberId,
        bookId: payload.bookId,
      },
    });

    if (existingBorrow) {
      throw new AppError(
        400,
        "Member has already borrowed a copy of this book"
      );
    }

    const result = await transactionClient.borrowRecord.create({
      data: payload,
    });

    await transactionClient.book.update({
      where: { bookId: payload.bookId },
      data: { availableCopies: { decrement: 1 } },
    });

    return result;
  });
};



export const BorrowServices = {
  borrowBook,
};
