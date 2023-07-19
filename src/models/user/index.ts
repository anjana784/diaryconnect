import { Schema, model } from "mongoose";
import { userType } from "utils/types";

export const userSchema = new Schema<userType>({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  roll: {
    type: String,
    default: "user",
  },
});

const User = model<userType>("User", userSchema);

export default User;
