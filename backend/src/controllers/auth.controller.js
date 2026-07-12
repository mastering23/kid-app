const login = async (req, res) => {
  res.json({
    message: "Login works!",
  });
};

const register = async (req, res) => {
  res.json({
    message: "Register works!",
  });
};

const logout = async (req, res) => {
  res.json({
    message: "Logout works!",
  });
};


module.exports = {
  login,
  register,
  logout,
};