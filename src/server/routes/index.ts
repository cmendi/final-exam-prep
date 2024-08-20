import express from "express";

import apiRouter from "./apiRoutes";

const router = express.Router();

router.use("/api", apiRouter);

export default router;
