import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true }  // e.g., Lead Owner
});

const User = mongoose.model("User", userSchema);

export default User;
