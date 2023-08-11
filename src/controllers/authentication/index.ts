import * as crypto from "crypto";
import type { RequestHandler } from "express";
import * as bcrypt from "bcrypt";
import User from "./../../models/user";
import responseObject from "./../../utils/responseObject";
import * as jwt from "jsonwebtoken";

// signup
export const signUp: RequestHandler = async (req, res) => {
  try {
    // get username, email and password from the request body
    const { username, email, password } = req.body as {
      username: string;
      email: string;
      password: string;
    };

    // check if the username or email already exists
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    // send error if username or email already exists
    if (user) {
      res.status(409).send({
        ...responseObject,
        status: "username or email already exists",
        error: {
          message: "username or email already exists",
        },
      });
    } else {
      // genarate salt with 12 rounds
      const salt = await bcrypt.genSalt(12);

      // create hash from the plain password
      const hashedPassword = await bcrypt.hash(password, salt);

      // generate verification token
      const verificationToken = crypto.randomBytes(20).toString("hex");

      // create a new user
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        verified: false,
        verificationToken,
      });

      // create a token
      const token = jwt.sign(
        {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          role: newUser.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      // send final response
      res.status(200).send({
        ...responseObject,
        status: "signup successfull",
        data: {
          username: newUser.username,
          email: newUser.email,
          token,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// login
export const login: RequestHandler = async (req, res) => {
  try {
    // get username or email and password from the request body
    const { username, email, password } = req.body;

    let user;

    // check the availabiliy from username or email
    if (!email) {
      user = await User.findOne({ username });
    } else if (!username) {
      user = await User.findOne({ email });
      console.log(user);
    }

    // // send error if username or email doesn't exist
    if (user) {
      // validate the password
      const match = await bcrypt.compare(password, user.password);

      // if password is invalid send the error
      if (match) {
        // if passowrd is valid send a token to the client

        // create a token
        const token = jwt.sign(
          {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );

        res.status(200).send({
          ...responseObject,
          status: "login successfull",
          data: {
            username: user.username,
            email: user.email,
            token,
          },
        });
      } else {
        res.status(401).send({
          ...responseObject,
          status: "incorrect password",
          error: {
            message: "invalid username or password",
          },
        });
      }
    } else {
      res.status(401).send({
        ...responseObject,
        status: "username or email couldn't find",
        error: {
          message: "invalid username or password",
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      ...responseObject,
      status: "login unsuccessfull",
      error: {
        message: "internal server error",
      },
    });
  }
};
