import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    randomString: { type: String },
  },
  { versionKey: false }
);

export default mongoose.model("User", userSchema);