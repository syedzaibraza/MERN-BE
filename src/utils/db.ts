import mongoose from "mongoose";
const url = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("DB connection failed");
    process.exit(0);
  }
};

export default connectDB;
