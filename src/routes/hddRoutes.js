// src/routes/hddRoutes.js
import express from "express";
import { HddController } from "../controllers/hddController.js";

const router = express.Router();

router.get("/", HddController.getAll);
router.get("/:id", HddController.getById);
router.post("/", HddController.create);
router.put("/:id", HddController.update);
router.delete("/:id", HddController.remove);

export default router;