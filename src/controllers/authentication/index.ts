import { randomBytes } from "crypto";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import User from "./../../models/user";

// signup
export const signUp = async (req: Request, res: Response) => {
  try {
    // get username, email and password from the request body
    const { username, email, password } = req.body;

    // genarate salt with 12 rounds
    const salt = await bcrypt.genSalt(12);

    // create hash from the plain password
    const hashedPassword = await bcrypt.hash(password, salt);

    // generate verification token
    const verificationToken = randomBytes(20).toString("hex");

    // create a new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      verified: false,
      verificationToken,
    });

    // send final response
    res.status(200).send({
      status: "user was created",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// login
export const login = async (req: Request, res: Response) => {
  // get username or email and password from the request body
  const { username, email, password } = req.body;

  let user;

  // check the availabiliy from username
  if (!email) {
    user = await User.findOne({ username });
    console.log(user.password);

    // const validated = await bcrypt.compare(password, user.password);
    // console.log(validated);
  }

  // check availability from email
  if (!username) {
    user = await User.find({ email });
  }
};
