import { Router } from "express";
import { signUp, login } from "./../../controllers/authentication";

// create auth router
const authRouter = Router();

// handle signup
authRouter.route("/signup").post(signUp);
authRouter.route("/login").post(login);

export default authRouter;
