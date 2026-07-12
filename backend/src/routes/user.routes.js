const jwt = require("jsonwebtoken");
const { ACCESS_SECRET } = require("../config/jwt");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Access token missing",
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, ACCESS_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid token",
      });
    }

    req.user = user;

    next();
  });
};

module.exports = authenticate;