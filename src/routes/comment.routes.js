import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js"

const router = Router()

router.get("/comments", authRequired, (req, res) => res.send("comments"))

export default router