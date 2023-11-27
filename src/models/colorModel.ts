import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const colorModel = mongoose.model("Color", colorSchema);

export default colorModel;
