import { Router } from "express";
import { createAlert } from "../controllers/alerts.controllers.js";

const router = Router();

router.route('/alert').post(createAlert)

export default router;