import { Schema, model } from "mongoose";
import { commentSchema } from "./../../models/comment";
import { tagSchema } from "./../../models/tag";
import { postType } from "utils/types";

const postSchema = new Schema<postType>({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
  slug: {
    type: String,
    required: [true, "Slug is required"],
    unique: true,
  },
  author: {
    type: String,
    default: "anjana784",
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  tags: {
    type: [tagSchema],
    required: false,
  },
  comments: {
    type: [commentSchema],
    required: false,
  },
});

const Post = model<postType>("Post", postSchema);

export default Post;
