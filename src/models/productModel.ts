import mongoose, { Document, Schema, Types } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string | Types.ObjectId | Record<string, unknown>;
  imageUrls: string[];
  colors: string[] | Types.ObjectId[] | Record<string, unknown>[];
  stock?: number;
  comments?: Types.ObjectId | Record<string, unknown>;
  rating?: {
    userId: Types.ObjectId | Record<string, unknown>;
    stars: number;
  }[];
}

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, ref: "Category" },
    imageUrls: [String],
    colors: { type: [String], ref: "Color" },
    stock: {
      type: Number,
      default: 0,
    },
    comments: {
      type: mongoose.Types.ObjectId,
      ref: "Comments",
      // default: [],
    },
    rating: [
      {
        userId: {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
        stars: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

const productModel = mongoose.model<IProduct>("Product", productSchema);

export default productModel;
