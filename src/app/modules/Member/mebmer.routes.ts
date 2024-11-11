import { Router } from "express";
import { MemberControllers } from "./member.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { MembersValidationSchemas } from "./member.validation";

const router = Router();

router.post("/",validateRequest(MembersValidationSchemas.zMemberSchema), MemberControllers.createMember);
router.get("/",MemberControllers.getAllMembers)
export const MemberRoutes = router;
