import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registrationController = async (req, res, next) => {
  try {
      console.log("Check 3 :", req.body);
      // get data from frontend
      const { fullname, email, phone, password } = req.body;

    // check if something not exists

    if (!fullname || !email || !phone || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    // check if user exists already with the help of primary key

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("Email Already Exists");
      error.statusCode = 409;
      return next(error);
    }

    // pass authentication using salts of bcrypt js

    const salt = await bcrypt.genSalt(10);

    const hashed = await bcrypt.hash(password, salt);

    // saving data to db and hased as password

    const newUser = await User.create({
      fullname,
      email,
      phone,
      password: hashed,
    });

    console.log("Check 4 : ", newUser);

    // return response to frontend

    res.status(200).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("Email not exists");
      error.statusCode = 403;
      return next(error);
    }

    // email verification

    const match = await bcrypt.compare(password, existingUser.password);

    if (!match) {
      const error = new Error("Email or Password Mismatched");
      error.statusCode = 401;
      return next(error);
    }

    res
      .status(200)
      .json({ message: "User Login Successful", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
