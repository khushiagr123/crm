const mongoose = require('mongoose');
const { Schema } = mongoose;
// Define the lead schema
const leadSchema = new Schema(
  {
    leadImage: { type: String },
    leadOwner: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to users collection
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    title: { type: String },
    phone: { type: String },
    mobile: { type: String },
    email: { type: String, required: true, unique: true },
    secondaryEmail: { type: String },
    fax: { type: String },
    skypeID: { type: String },
    twitter: { type: String },
    leadSource: { type: Schema.Types.ObjectId, ref: 'Source' }, // Reference to sources collection
    leadStatus: { type: String },
    rating: { type: String },
    leadScore: { type: Number },
    interestLevel: { type: String },
    nextFollowUpDate: { type: Date },
    emailOptOut: { type: Boolean, default: false },
    description: { type: String },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company' }, // Reference to companies collection
    addressId: { type: Schema.Types.ObjectId, ref: 'Address' }, // Reference to addresses collection
    preferredContactMethod: { type: Schema.Types.ObjectId, ref: 'ContactMethod' } // Reference to contact_methods collection
  },
  {
    timestamps: true // Adds createdAt and updatedAt fields
  }
);

// Define the Lead model
const Lead = mongoose.model('Lead', leadSchema);

// Export the Lead model
module.exports = Lead;
