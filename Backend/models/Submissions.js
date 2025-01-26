import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const submit = mongoose.model("Submission", SubmissionSchema)
export default submit;

