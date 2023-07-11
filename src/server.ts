import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

// Connect to MongoDB
const databaseUrl = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const connect = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
connect();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
