import express from "express";
const router = express.Router();
import { createComment } from "../conrollers/commentControllers.js";
import { authGuard } from "../middleware/authMiddleware";

router.post("/", authGuard, createComment);

export default router;