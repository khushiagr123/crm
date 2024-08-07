import mongoose from "mongoose";

const companySchema = mongoose.Schema({
  companyName: { type: String, required: true },
  website: { type: String },
  annualRevenue: { type: Number },
  numberOfEmployees: { type: Number },
  industryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Industry', required: true }
});

const Company = mongoose.model("Company", companySchema);

export default Company;
