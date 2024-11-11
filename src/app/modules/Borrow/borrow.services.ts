import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";
import AppError from "../../errors/appError";

const borrowBook = async (payload: BorrowRecord) => {
  return await prisma.$transaction(async (transaction) => {
    const book = await transaction.book.findUniqueOrThrow({
      where: {
        bookId: payload.bookId,
      },
    });

    if (book.availableCopies <= 0) {
      throw new AppError(404, "No available copies of the book");
    }

    const memberExists = await transaction.member.findUnique({
      where: { memberId: payload.memberId },
    });

    if (!memberExists) {
      throw new AppError(404, "Member not found");
    }

    // Check if the member already has a borrow record for the same book
    const existingBorrow = await transaction.borrowRecord.findFirst({
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

    const result = await transaction.borrowRecord.create({
      data: payload,
    });

    await transaction.book.update({
      where: { bookId: payload.bookId },
      data: { availableCopies: { decrement: 1 } },
    });

    return result;
  });
};

export const BorrowServices = {
  borrowBook,
};
