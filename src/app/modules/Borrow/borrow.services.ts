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

const getAllBorrowBooks = async () => {
  const result = await prisma.borrowRecord.findMany();
  return result;
};
const getOverdueBooks = async () => {
  const overdueThreshold = new Date();
  overdueThreshold.setDate(overdueThreshold.getDate() - 14);

  // Query overdue records
  const overdueRecords = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null, // Book not returned
      borrowDate: { lt: overdueThreshold }, // Borrowed more than 14 days ago
    },
    include: {
      book: { select: { title: true } },
      member: { select: { name: true } },
    },
  });

  // Map the results to include overdue days
  return overdueRecords.map((record) => {
    const borrowDate = new Date(record.borrowDate).getTime();
    console.log({borrowDate});
    const currentDate = new Date().getTime();

    // Calculate overdue days by dividing the milliseconds difference by the number of milliseconds in a day
    const overdueDays =
      Math.floor((currentDate - borrowDate) / (1000 * 60 * 60 * 24)) - 14;

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays,
    };
  });

};


export const BorrowServices = {
  borrowBook,
  getAllBorrowBooks,
  getOverdueBooks

};
