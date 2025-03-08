const { model } = require("mongoose");
let User = require("../models/user");
let meCtrls = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {
  meCtrls,
};
