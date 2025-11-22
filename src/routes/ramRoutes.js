// src/routes/ramRoutes.js
import express from "express";
import { RamController } from "../controllers/ramController.js";

const router = express.Router();

router.get("/", RamController.getAll);
router.get("/:id", RamController.getById);
router.post("/", RamController.create);
router.put("/:id", RamController.update);
router.delete("/:id", RamController.remove);

export default router;