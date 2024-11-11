import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BorrowServices } from "./borrow.services";

const borrowBook = catchAsync(async (req, res) => {
  const result = await BorrowServices.borrowBook(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

export const BorrowControllers = {
  borrowBook,
};
