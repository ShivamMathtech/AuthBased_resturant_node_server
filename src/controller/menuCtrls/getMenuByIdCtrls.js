const Menu = require("../../models/menu");
let getMenuByIdCtrls = async (req, res) => {
  try {
    console.log(req.params.id);
    const menu = await Menu.findById({ _id: req.params.id });
    if (!menu) {
      return res.status(404).json({
        msg: "Menu is not Find",
      });
    } else {
      res.status(200).json({
        msg: "menu If Found",
        data: menu,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Eorror",
      error: error.message,
    });
  }
};

module.exports = {
  getMenuByIdCtrls,
};
