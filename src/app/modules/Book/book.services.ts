import { Book, PrismaClient } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBook = async (payload: Book) => {
  const result = await prisma.book.create({ data: payload });
  return result;
};
const getBookById = async (id: string) => {
  const result = await prisma.book.findUniqueOrThrow({ where:{
    bookId:id
  }});
  return result;
};

export const BookServices = {
  createBook,
  getBookById
};
