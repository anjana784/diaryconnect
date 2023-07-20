import { Request, Response } from "express";
import User from "./../../models/user";
import responseObject from "./../../utils/responseObject";
import * as bcrypt from "bcrypt";
import * as crypto from "crypto";

// get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    console.log("GET:/user");
    const users = await User.find({});
    res.status(200).json({
      staus: "Success get users",
      data: {
        items: users.length,
        users,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// create a user
export const createUser = async (req: Request, res: Response) => {
  try {
    // get username, email and password from the request body
    const { username, email, password, role } = req.body;

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

      // create a new user
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        verified: true,
        role,
      });

      // // create a token
      // const token = jwt.sign(
      //   {
      //     id: newUser._id,
      //     username: newUser.username,
      //     email: newUser.email,
      //     roll: newUser.role,
      //   },
      //   process.env.JWT_SECRET,
      //   {
      //     expiresIn: "1d",
      //   }
      // );

      // send final response
      res.status(200).send({
        ...responseObject,
        status: "signup successfull",
        data: {
          username: newUser.username,
          email: newUser.email,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// delete a user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    console.log("DELETE:/user");
    const result = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      staus: "Success",
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
