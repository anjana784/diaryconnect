import { Request, Response } from "express";
import User from "./../../models/user";

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
    console.log("POST:/user");
    const result = await User.create(req.body);
    res.status(200).json({
      staus: "Success",
    });
    console.log(result);
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
