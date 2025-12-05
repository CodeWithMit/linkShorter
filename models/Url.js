// models/Url.js
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    Url: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.models.Url || mongoose.model("Url", urlSchema);
