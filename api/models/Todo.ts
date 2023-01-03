import mongoose from "mongoose";
const { Schema } = mongoose;

const TodoSchema = new Schema({
  createdAt: {
    default: new Date(),
    required: true,
    type: Date,
  },
  description: {
    required: true,
    type: String,
  },
  dueDate: {
    required: true,
    type: Date,
  },
  status: {
    default: "in progress",
    enum: ["completed", "in progress"],
    required: true,
    type: String,
  },
});

export default mongoose.model("Todo", TodoSchema);
