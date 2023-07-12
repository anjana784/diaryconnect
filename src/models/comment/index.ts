import { Schema, model } from "mongoose";
import { userSchema } from "./../../models/user";

export const commentSchema = new Schema({
  user: userSchema,
  content: String,
  date: {
    year: Number,
    month: Number,
    day: Number,
  },
});

const Comment = model("Comment", commentSchema);

export default Comment;
