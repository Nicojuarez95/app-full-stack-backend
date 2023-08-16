import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js"
import { getComments, getComment, createComment, deleteComment, updateComment, getCommentsUser } from "../controllers/comments.controller.js";

const router = Router()

router.get("/comments", authRequired, getComments)
router.get("/comments/:id", authRequired, getComment)
router.post("/comments", authRequired, createComment)
router.delete("/comments/:id", authRequired, deleteComment)
router.put("/comments/:id", authRequired, updateComment)
// router.get("/comments/", authRequired, getCommentsUser)

export default router