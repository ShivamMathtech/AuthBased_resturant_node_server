const Menu = require("../../models/menu");
let getAllMenuCtrls = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json({
      msg: "Menu is here..",
      menu: menu,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      errror: error.message,
    });
  }
};

module.exports = {
  getAllMenuCtrls,
};
