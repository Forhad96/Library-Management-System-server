import { Book, PrismaClient } from "@prisma/client";
import prisma from "../../../shared/prisma";



const createBook = async (payload: Book) => {

  const result = await prisma.book.create({ data: payload });
  return result;
};

export const BookServices = {
  createBook,
};
