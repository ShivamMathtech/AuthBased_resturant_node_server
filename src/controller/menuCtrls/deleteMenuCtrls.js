const Menu = require("../../models/menu");

let DeleteMenuCtrls = async (req, res) => {
  try {
    let menu = await Menu.findByIdAndDelete({ _id: req.params.id });
    if (!menu) {
      return res.status(404).json({
        msg: "Menu not found",
      });
    }
    res.status(200).json({
      msg: "Item is deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  DeleteMenuCtrls,
};
