import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { MemberServices } from "./member.services";

const createMember = catchAsync(async (req, res) => {
  const result = await MemberServices.createMember(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

export const MemberControllers = {
  createMember,
};
