import * as crypto from "crypto";
import type { RequestHandler } from "express";
import * as bcrypt from "bcrypt";
import User from "./../../models/user";
import responseObject from "./../../utils/responseObject";
import * as jwt from "jsonwebtoken";
import errorHandler from "./../../middlewares/errorHandler";
import { disconnect } from "./../../utils/database";

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
      errorHandler(
        {
          statusCode: 400,
          type: "Bad Request",
          message: "username or email already exists",
        },
        req,
        res
      );
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

      disconnect();

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
    errorHandler(
      {
        statusCode: 500,
        message: "internal server error",
        type: "internal",
      },
      req,
      res
    );
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
    }

    if (user) {
      // if user exists
      // validate the password
      const match = await bcrypt.compare(password, user.password);

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

        // send final response
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
        // send error if password is invalid
        errorHandler(
          {
            statusCode: 401,
            message: "invalid username or password",
            type: "validation",
          },
          req,
          res
        );
      }
    } else {
      // send error if username or email doesn't exist
      errorHandler(
        {
          statusCode: 401,
          message: "cannot find the user",
          type: "bad request",
        },
        req,
        res
      );
    }
  } catch (err) {
    // send error if any error occurs
    errorHandler(
      {
        statusCode: 500,
        message: "internal server error",
        type: "internal",
      },
      req,
      res
    );
  }
};
