import express from "express";
import {
    check,
    loginUser,
    logoutUser,
    registerUser,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", authMiddleware, logoutUser);

router.get("/check", authMiddleware, check);

export default router;
