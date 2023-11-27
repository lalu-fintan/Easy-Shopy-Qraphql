import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    message: {
      type: String,
      default: "",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("Comments", commentSchema);

export default commentModel;
