import { Router } from "express";
import { signUp, login } from "./../../controllers/authentication";
import signUpSchema from "./../../utils/schemas/user";
import requestSchemaValidator from "./../../middlewares/requestSchemaValidator";

// create auth router
const authRouter = Router();

// handle signup
authRouter.route("/signup").post(signUpSchema, requestSchemaValidator, signUp);
authRouter.route("/login").post(login);

export default authRouter;
