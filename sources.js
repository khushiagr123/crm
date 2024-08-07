import mongoose from "mongoose";

const sourceSchema = mongoose.Schema({
  sourceName: { type: String, required: true }  // e.g., Website, Referral, Advertisement
});

const Source = mongoose.model("Source", sourceSchema);

export default Source;
