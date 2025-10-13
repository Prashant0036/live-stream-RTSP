import Overlay from "../models/Overlay.js";

// Create Overlay
export const createOverlay = async (req, res) => {
  try {
    const overlay = new Overlay(req.body);
    const saved = await overlay.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Read all Overlays
export const getOverlays = async (req, res) => {
  try {
    const overlays = await Overlay.find();
    res.json(overlays);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Overlay
export const updateOverlay = async (req, res) => {
  try {
    const updated = await Overlay.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Overlay
export const deleteOverlay = async (req, res) => {
  try {
    await Overlay.findByIdAndDelete(req.params.id);
    res.json({ message: "Overlay deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
