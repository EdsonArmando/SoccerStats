import { Router } from "express";
const router = Router();

import userRoutes from "./algorithm.route";

router.use('/algorithm', userRoutes);

export default router;