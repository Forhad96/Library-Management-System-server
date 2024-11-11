import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ReturnServices } from "./return.services";

const returnBook = catchAsync(async (req, res) => {
  
  await ReturnServices.returnBook(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book returned successfully",
  });
});
export const ReturnControllers = {
  returnBook,
};
