import { Schema, model } from "mongoose";
import { tagType } from "utils/types";

export const tagSchema = new Schema<tagType>({
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

const Tag = model<tagType>("Tag", tagSchema);

export default Tag;
