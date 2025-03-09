const Menu = require("../../models/menu");
let AddMenuCtrls = async (req, res) => {
  try {
    const { name, description, price, category, image, availability } =
      req.body;
    if (!name || !price || !category) {
      return res
        .status(400)
        .json({ msg: "Name, price, and category are required" });
    }
    const newMenuItem = new Menu({
      name,
      description,
      price,
      category,
      image,
      availability,
    });
    await newMenuItem.save();
    res.status(201).json({ msg: "Menu item added successfully", newMenuItem });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { AddMenuCtrls };
