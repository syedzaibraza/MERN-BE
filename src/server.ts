require("dotenv").config();
import express from "express";
import router from "./routes/router";
import connectDB from "./utils/db";
const app = express();
app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
