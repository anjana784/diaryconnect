import { Schema, model } from "mongoose";
import { userSchema } from "./../../models/user";
import { commentType } from "types";

export const commentSchema = new Schema<commentType>({
  user: userSchema,
  content: String,
  date: {
    year: Number,
    month: String,
    date: Number,
  },
});

const Comment = model<commentType>("Comment", commentSchema);

export default Comment;
