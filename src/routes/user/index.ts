import { Router } from "express";
import { createUser, getAllUsers, deleteUser } from "./../../controllers/user";

// create user router
const userRouter = Router();

// handle /user router
userRouter.route("/").get(getAllUsers).post(createUser);

// handle /user/:id router
userRouter.route("/:id").delete(deleteUser);

// export user router
export default userRouter;
