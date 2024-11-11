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
const getAllMembers = catchAsync(async (req, res) => {
  const result = await MemberServices.getAllMembers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

export const MemberControllers = {
  createMember,
  getAllMembers,
};
