import expess from "express";
import postRouter from "./routes/post";
import tagRouter from "./routes/tag";
import userRouter from "./routes/user";

const app = expess();
app.use(expess.json());
app.use("/post", postRouter);
app.use("/tag", tagRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
