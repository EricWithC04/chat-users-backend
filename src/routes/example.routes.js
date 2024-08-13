import { Router } from "express";
import { getExample} from "../controllers/example.controllers.js";

const router = Router();

router.get("/", getExample);

export default router