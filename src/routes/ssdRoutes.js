// src/routes/ssdRoutes.js
import express from "express";
import { SsdController } from "../controllers/ssdController.js";

const router = express.Router();

router.get("/", SsdController.getAll);
router.get("/:id", SsdController.getById);
router.post("/", SsdController.create);
router.put("/:id", SsdController.update);
router.delete("/:id", SsdController.remove);

export default router;