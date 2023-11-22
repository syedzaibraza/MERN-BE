import { Request, Response } from "express";
import User from "../models/user-model";
import bcrypt from "bcrypt";
const Home = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "hello world" });
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req: any, res: any) => {
  try {
    const { name, email, password, contact } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      res.status(400).json({ message: "User already exists" });
    } else {
      await User.create({
        name,
        email,
        password,
        contact,
      });

      res.status(200).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default { Home, Register };
