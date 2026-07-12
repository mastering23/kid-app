const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../config/jwt");

// Temporary user
const users = [
  {
    id: 1,
    username: "admin",
    password: bcrypt.hashSync("password123", 10),
    role: "Admin",
  },
];

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username
  );

  if (!user)
    return res.status(401).json({
      message: "Invalid credentials",
    });

  const valid = await bcrypt.compare(
    password,
    user.password
  );

  if (!valid)
    return res.status(401).json({
      message: "Invalid credentials",
    });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  res.json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  });
};

const register = async (req, res) => {
  res.json({
    message: "Register endpoint coming soon",
  });
};

const logout = async (req, res) => {
  res.json({
    message: "Logged out",
  });
};

module.exports = {
  login,
  register,
  logout,
};