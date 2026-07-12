const jwt = require("jsonwebtoken");

const ACCESS_SECRET =
  process.env.JWT_ACCESS_SECRET || "your-access-secret";

const REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || "your-refresh-secret";

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    ACCESS_SECRET,
    {
      expiresIn: "15m",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
    },
    REFRESH_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

module.exports = {
  ACCESS_SECRET,
  REFRESH_SECRET,
  generateAccessToken,
  generateRefreshToken,
};