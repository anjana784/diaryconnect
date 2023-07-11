import { Schema, model } from "mongoose";
import { postType } from "types";

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
  published: {
    type: {
      year: Number,
      month: Number,
      day: Number,
    },
    required: [true, "Published date is required"],
  },
  lastUpdated: {
    type: {
      year: Number,
      month: Number,
      day: Number,
    },
    required: [true, "Last updated date is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  comments: {
    type: [
      {
        user: {
          username: String,
          password: String,
          email: String,
        },
        content: String,
        date: {
          year: Number,
          month: Number,
          day: Number,
        },
      },
    ],
    default: [],
  },
});

const Post = model<postType>("Post", postSchema);

export default Post;
