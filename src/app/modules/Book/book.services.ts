import { Book, PrismaClient } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBook = async (payload: Book) => {
  const result = await prisma.book.create({ data: payload });
  return result;
};
const getAllBooks = async () => {
  const result = await prisma.book.findMany();
  return result;
};
const getBookById = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });
  return result;
};
const updateBook = async (bookId: string, payload: Partial<Book>) => {
  await prisma.book.findFirstOrThrow({
    where: {
      bookId,
    },
  });
  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: payload,
  });
  return result;
};

const deleteBook = async (bookId: string) => {
  await prisma.book.findUniqueOrThrow({ where: { bookId } });
  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });
  return result;
};

export const BookServices = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
