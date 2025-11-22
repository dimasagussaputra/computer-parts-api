// src/routes/gpuRoutes.js
import express from "express";
import { GpuController } from "../controllers/gpuController.js";

const router = express.Router();

router.get("/", GpuController.getAll);
router.get("/:id", GpuController.getById);
router.post("/", GpuController.create);
router.put("/:id", GpuController.update);
router.delete("/:id", GpuController.remove);

export default router;