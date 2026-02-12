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

    res.cookie("monaco", token, {
      maxAge: 1000 * 60 * 60 * 60,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    
  } catch (error) {
    throw error;
  }
};
