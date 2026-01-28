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

    const updatedUser = User.findByIdAndUpdate(
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
