const User = require("../models/user");
const bcrypt = require("bcryptjs");
const registerCtrls = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      res.status(400).json({
        msg: "User Already Exists",
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      user = new User({ name, email, password: hashPassword, role });
      await user.save();
      res.status(200).json({
        msg: "User is saved Successfully",
        user: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};
module.exports = {
  registerCtrls,
};
