const express = require("express");
const authRouter = express.Router();
const { registerCtrls } = require("../controller/registerCtrls");
const { loginCtrls } = require("../controller/loginCtrls");
const { meCtrls } = require("../controller/meCtrls");
const authMiddleware = require("../middleware/authmiddleware");
authRouter.post("/register", registerCtrls);
authRouter.post("/login", loginCtrls);
authRouter.get("/me", authMiddleware, meCtrls);
module.exports = {
  authRouter,
};
