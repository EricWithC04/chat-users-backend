import { Router } from "express";
import {
    ctrlGetAllUsers,
    ctrlGetUserById,
    ctrlCreateUser,
    ctrlUpdateUser,
    ctrlDeleteUser,
} from "../controllers/user.controllers.js";

const router = Router();

router.get("/", ctrlGetAllUsers);
router.get("/:id", ctrlGetUserById);
router.post("/", ctrlCreateUser);
router.put("/:id", ctrlUpdateUser);
router.delete("/:id", ctrlDeleteUser);

export default router;