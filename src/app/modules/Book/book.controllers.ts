import { Request, Response } from "express";
import { BookServices } from "./book.services";
import sendResponse from "../../../shared/sendResponse";

const createBook = async (req: Request, res: Response) => {
  const result = await BookServices.createBook(req.body);
  sendResponse(res, {
    statusCode:200,
    success: true,
    message: "Book created successfully",
    data: result,
  });

};

export const BookControllers = {
  createBook,
};
