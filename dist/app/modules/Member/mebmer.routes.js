"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = require("express");
const member_controllers_1 = require("./member.controllers");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const member_validation_1 = require("./member.validation");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(member_validation_1.MembersValidationSchemas.zMemberSchema), member_controllers_1.MemberControllers.createMember);
router.get("/", member_controllers_1.MemberControllers.getAllMembers);
router.get("/:memberId", member_controllers_1.MemberControllers.getMemberById);
router.put("/:memberId", (0, validateRequest_1.default)(member_validation_1.MembersValidationSchemas.zUpdateMemberSchema), member_controllers_1.MemberControllers.updateMember);
router.delete("/:memberId", member_controllers_1.MemberControllers.deleteMember);
exports.MemberRoutes = router;
