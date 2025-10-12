// routes/alertRoutes.js
import { Router } from "express";
import { createAlert, getAlerts } from "../controllers/alerts.controllers.js";
import verifyjwt from "../middlewares/auth.middlewares.js";

const router = Router();

// ✅ Protect all routes
router.use(verifyjwt);

// Create alert - POST /api/v1/alerts
router.route('/').post(createAlert);

// Get all alerts for logged-in user - GET /api/v1/alerts
router.route('/').get(getAlerts);

export default router;