import { Request, Response } from "express";
import { BookServices } from "./book.services";

const createBook = async (req: Request, res: Response) => {
  const result = await BookServices.createBook(req.body);
  res.status(200).json({
    success: true,
    message: "Book created successfully",
    data: result,
  });
};

export const BookControllers = {
  createBook,
};
