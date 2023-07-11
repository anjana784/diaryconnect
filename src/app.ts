import expess from "express";

const app = expess();

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
