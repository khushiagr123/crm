import mongoose from "mongoose";

const industrySchema = mongoose.Schema({
  industryName: { type: String, required: true }  // e.g., Software, Manufacturing, Healthcare
});

const Industry = mongoose.model("Industry", industrySchema);

export default Industry;
