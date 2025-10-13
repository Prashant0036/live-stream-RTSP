import mongoose from "mongoose";

const overlaySchema = new mongoose.Schema({
  text: { type: String, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  color: { type: String, default: "#ffffff" },
  fontSize: { type: Number, default: 20 },
});

export default mongoose.model("Overlay", overlaySchema);
