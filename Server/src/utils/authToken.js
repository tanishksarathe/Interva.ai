import jwt from "jsonwebtoken";

export const genToken = async (user, res) => {
  try {
    const payload = {
      id: user._id,
      role: user.role || "admin",
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    console.log("Generated Token : ", token);

    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 60,
      httpOnly: true,
      secure: true, // true in production
      sameSite: "none", // production = none, development = lax
    });
    
  } catch (error) {
    throw error;
  }
};
