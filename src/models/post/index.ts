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
  metaTitle: {
    type: String,
    required: [true, "Meta title is required"],
  },
  metaDescription: {
    type: String,
    required: [true, "Meta description is required"],
  },
  author: {
    type: String,
    default: "anjana784",
  },
  featuredImage: {
    type: String,
    required: [true, "Featured image is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  tags: {
    type: [String],
    required: [true, "Tags are required"],
  },
  comments: {
    type: [commentSchema],
    required: false,
  },
});

const Post = model<postType>("Post", postSchema);

export default Post;
