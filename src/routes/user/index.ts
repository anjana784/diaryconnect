import { Router } from "express";
import { createUser, getAllUsers, deleteUser } from "./../../controllers/user";
import authMiddleware from "./../../middlewares/authMiddleware";

// create user router
const userRouter = Router();

// handle /user router
userRouter.route("/").get(getAllUsers).post(authMiddleware, createUser);

// handle /user/:id router
userRouter.route("/:id").delete(authMiddleware, deleteUser);

// export user router
export default userRouter;
