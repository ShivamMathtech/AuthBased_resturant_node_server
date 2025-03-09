const express = require("express");
const { getAllMenuCtrls } = require("../controller/menuCtrls/getAllMenu");
const {
  getMenuByIdCtrls,
} = require("../controller/menuCtrls/getMenuByIdCtrls");
const { AddMenuCtrls } = require("../controller/menuCtrls/addMenuCtrls");
const { DeleteMenuCtrls } = require("../controller/menuCtrls/deleteMenuCtrls");
const menuRouter = express.Router();
menuRouter.get("/menuAll", getAllMenuCtrls);

menuRouter.post("/addmenu", AddMenuCtrls);

menuRouter.get("/getMenu/:id", getMenuByIdCtrls);

menuRouter.put("/menuUpdate", async (req, res) => {
  res.status(200).json({
    msg: "Menu items is updated ",
  });
});

menuRouter.delete("/deleteMenu/:id", DeleteMenuCtrls);

module.exports = {
  menuRouter,
};
