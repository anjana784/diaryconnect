import expess from "express";
import postRouter from "./routes/post";

const app = expess();
app.use(expess.json());
app.use("/post", postRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
