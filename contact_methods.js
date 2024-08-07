import mongoose from "mongoose";

const contactMethodSchema = mongoose.Schema({
  method: { type: String, required: true }  // e.g., Email, Phone, Skype
});

const ContactMethod = mongoose.model("ContactMethod", contactMethodSchema);

export default ContactMethod;
