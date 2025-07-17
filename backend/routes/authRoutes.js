import express from "express";
import { register, login } from "../controllers/authController.js"; // don't forget .js or .mjs

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
