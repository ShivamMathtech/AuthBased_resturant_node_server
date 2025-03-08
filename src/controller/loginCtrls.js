const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { model } = require("mongoose");
const loginCtrls = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).json({
        msg: "Invalid Credentials",
      });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({
          msg: "Invalid Credentials",
        });
      } else {
        const token = jwt.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.json({ token, user });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

module.exports = {
  loginCtrls,
};
