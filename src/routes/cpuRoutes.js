// src/routes/cpuRoutes.js
import express from "express";
import { CpuController } from "../controllers/cpuController.js";

const router = express.Router();

router.get("/", CpuController.getAll);
router.get("/:id", CpuController.getById);
router.post("/", CpuController.create);
router.put("/:id", CpuController.update);
router.delete("/:id", CpuController.remove);

export default router;