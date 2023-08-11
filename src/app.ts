import express, { json } from "express";
import postRouter from "./routes/post";
import tagRouter from "./routes/tag";
import userRouter from "./routes/user";
import authRouter from "./routes/authentication";
import authMiddleware from "./middlewares/authMiddleware";

const app = express();

// global middleware
app.use(json());
app.use(authMiddleware);

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/tag", tagRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
