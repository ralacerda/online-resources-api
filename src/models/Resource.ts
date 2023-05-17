import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: Array },
    url: { type: String },
    screenshot: { type: String },
  },
  { collection: "resources" }
);

const resources = mongoose.model("resources", resourceSchema);

export default resources;
