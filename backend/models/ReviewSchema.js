import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {

  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
