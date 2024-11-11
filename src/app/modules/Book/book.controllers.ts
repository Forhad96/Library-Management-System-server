import { BookServices } from "./book.services";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBook(req.body);
  sendResponse(res, {
    statusCode:201,
    success: true,
    message: "Book created successfully",
    data: result,
  });

})
const getBookById = catchAsync(async (req, res) => {
  const {bookId} = req.params
  const result = await BookServices.getBookById(bookId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });

})
const updateBook = catchAsync(async (req, res) => {
  const {bookId} = req.params
  const result = await BookServices.updateBook(bookId,req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book updated successfully",
    data: result,
  });

})
const deleteBook = catchAsync(async (req, res) => {
  const {bookId} = req.params
  const result = await BookServices.updateBook(bookId,req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book successfully deleted",
    data: result,
  });

})

export const BookControllers = {
  createBook,
  getBookById,
  updateBook,
  deleteBook
};
