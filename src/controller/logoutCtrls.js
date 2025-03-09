let logoutCtrls = async (req, res) => {
  try {
    res.status(200).json({
      msg: "User logged out successfully ",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server error",
      error: error.message,
    });
  }
};

module.exports = { logoutCtrls };
