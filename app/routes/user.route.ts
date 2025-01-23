import { create } from "../controllers/user.controller";

import express, { Router } from "express";

const router: Router = express.Router();

router.post("/", create);

export default router;
