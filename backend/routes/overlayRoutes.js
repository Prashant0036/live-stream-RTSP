import express from "express";
import {
  createOverlay,
  getOverlays,
  updateOverlay,
  deleteOverlay,
} from "../controllers/overlayController.js";

const router = express.Router();

router.post("/", createOverlay);
router.get("/", getOverlays);
router.put("/:id", updateOverlay);
router.delete("/:id", deleteOverlay);

export default router;
