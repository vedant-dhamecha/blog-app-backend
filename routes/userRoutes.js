import express from "express";
const router = express.Router();
import { registerUser } from "../conrollers/userControllers";

router.post("/register", registerUser);

export default router;
