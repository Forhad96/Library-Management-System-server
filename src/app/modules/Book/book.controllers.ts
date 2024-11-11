import { BookServices } from "./book.services";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBook(req.body);
  sendResponse(res, {
    statusCode:200,
    success: true,
    message: "Book created successfully",
    data: result,
  });

})

export const BookControllers = {
  createBook,
};
