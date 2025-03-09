const user = require("../models/user");

let deleteCtrls = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.user.id);
    res.status(200).json({
      msg: "User is deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};
module.exports = {
  deleteCtrls,
};
