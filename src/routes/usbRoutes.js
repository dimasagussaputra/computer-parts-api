// src/routes/usbRoutes.js
import express from "express";
import { UsbController } from "../controllers/usbController.js";

const router = express.Router();

router.get("/", UsbController.getAll);
router.get("/:id", UsbController.getById);
router.post("/", UsbController.create);
router.put("/:id", UsbController.update);
router.delete("/:id", UsbController.remove);

export default router;