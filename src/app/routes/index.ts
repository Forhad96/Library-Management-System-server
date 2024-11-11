import express from "express";
import { BookRoutes } from "../modules/Book/book.routes";
import { MemberRoutes } from "../modules/Member/mebmer.routes";
import { BorrowRoutes } from "../modules/Borrow/borrow.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/borrow",
    route: BorrowRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
