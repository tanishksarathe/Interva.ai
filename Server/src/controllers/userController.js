import cloudinary from "../config/cloudinary.js";
import User from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
  try {
    const {
      fullname,
      email,
      phone,
      careerStage,
      targetRole,
      degree,
      branch,
      passout,
      github,
      leetcode,
      codechef,
      hackerrank,
      programmingLanguages,
    } = req.body;

    if (
      !fullname ||
      !email ||
      !phone ||
      !careerStage ||
      !targetRole ||
      !degree ||
      !branch ||
      !passout ||
      !github ||
      !leetcode ||
      !codechef ||
      !hackerrank ||
      !programmingLanguages
    ) {
      const error = new Error("All Fields Required");
      error.statusCode = 402;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("User not Exists");
      error.statusCode = 401;
      return next(error);
    }

    // getting current user from middleware

    const currentUser = req.user;

    console.log("Current User from req.user : ", currentUser);

    const updatedUser =await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullname,
        email: email.toLowerCase(),
        phone,
        careerStage,
        targetRole,
        degree,
        branch,
        passout,
        github,
        leetcode,
        codechef,
        hackerrank,
        programmingLanguages,
      },
      { new: true },
    );

    res
      .status(200)
      .json({ message: "User Updated Successfully", data: updatedUser });
  } catch (error) {
    next(error);
  }
};

export const updateUserPhoto = async (req, res, next) => {
  try {
    const currentUser = req.user;

    console.log("Current User", currentUser);

    const dp = req.file;

    console.log("dp from user Controller", dp);

    if (!dp) {
      const error = new Error("Profile Picture Required");
      error.statusCode = 400;
      return next(error);
    }

    // upload photo on cloudinary

    // erase the previous image

    if (currentUser.photo.publicID) {
      await cloudinary.uploader.destroy(currentUser.photo.publicID);
    }

    // now convert the recent image into base 64

    const b64 = Buffer.from(dp.buffer).toString("base64");

    console.log("Base 64 value", b64);
    // now form a data uri to store in place of photo.url

    const datauri = `data:${dp.mimetype};base64,${b64}`;

    console.log("Data URI", datauri.slice(0,50));
    // now actual upload

    const result = await cloudinary.uploader.upload(datauri, {
      folder: "IntervaAI/User",
      width: 500,
      height: 500,
      crop: "fill",
    });

    console.log("Result from user Controller", result);

    currentUser.photo.url = result.secure_url;
    currentUser.photo.publicID = result.public_id;

    await currentUser.save();

    res.status(200).json({ message: "File Collected", data: currentUser });
  } catch (error) {
    next(next);
  }
};
