import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    isAdmin: {
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
