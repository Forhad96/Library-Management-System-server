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
const getMemberById = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberServices.getMemberById(memberId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});
const updateMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberServices.updateMember(memberId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Members updated successfully",
    data: result,
  });
});
const deleteMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  await MemberServices.deleteMember(memberId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Members successfully Deleted",
  });
});

export const MemberControllers = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
