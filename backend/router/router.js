import express from "express";
import { signup ,login} from "../controller/user.controller.js";
import { getBook } from "../controller/book.controller.js";

const router=express.Router()


router.post("/login",login)

router.get("/getbook", getBook);
router.post("/signup",signup)
export default router;
