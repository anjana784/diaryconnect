import { Router } from "express";
import { createUser } from "./../../controllers/user";

// create user router
const userRouter = Router();

// handle /user router
userRouter.route("/").post(createUser);

export default userRouter;
