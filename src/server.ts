import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { connect } from "./utils/database";

// Connect to MongoDB
connect();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
