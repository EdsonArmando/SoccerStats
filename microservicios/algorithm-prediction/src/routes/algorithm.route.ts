import { Router } from "express";
const router = Router();
import {
    prediction,
} from "../controllers/algorithm.controller";

router.post('/prediction', prediction);

export default router;
