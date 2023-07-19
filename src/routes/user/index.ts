import { Router } from "express";
import { createUser, getAllUsers } from "./../../controllers/user";

// create user router
const userRouter = Router();

// handle /user router
userRouter.route("/").get(getAllUsers).post(createUser);

export default userRouter;
