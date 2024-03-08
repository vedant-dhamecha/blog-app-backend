import express from "express";
const router = express.Router();
import { createComment, updateComment, deleteComment } from "../conrollers/commentControllers.js";
import { authGuard } from "../middleware/authMiddleware";

router.post("/", authGuard, createComment);
router
  .route("/:commentId")
  .put(authGuard, updateComment)
  .delete(authGuard, deleteComment);

export default router;