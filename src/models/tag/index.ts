import { Schema, model } from "mongoose";

export const tagSchema = new Schema({
  name: {
    type: String,
    required: [true, "Tag name is required"],
    unique: true,
  },
  slug: {
    type: String,
    required: [true, "Tag slug is required"],
    unique: true,
  },
});

const Tag = model("Tag", tagSchema);

export default Tag;
