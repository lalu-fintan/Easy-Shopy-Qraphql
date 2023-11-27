import mongoose, { Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
}

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
