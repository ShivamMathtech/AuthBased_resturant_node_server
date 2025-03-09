const express = require("express");
const { check, validationResult } = require("express-validator");
const authRouter = express.Router();
const { registerCtrls } = require("../controller/registerCtrls");
const { loginCtrls } = require("../controller/loginCtrls");
const { meCtrls } = require("../controller/meCtrls");
const authMiddleware = require("../middleware/authmiddleware");
const { updateCtrls } = require("../controller/updateCtrls");
const { deleteCtrls } = require("../controller/deleteUserCtrls");
const { logoutCtrls } = require("../controller/logoutCtrls");
authRouter.post("/register", registerCtrls);
authRouter.post("/login", loginCtrls);
authRouter.get("/me", authMiddleware, meCtrls);
authRouter.put(
  "/update",
  authMiddleware,
  [
    check("name", "Name is required").optional().not().isEmpty(),
    check("email", "Please include a valid email").optional().isEmail(),
    check("password", "Password must be at least 6 characters")
      .optional()
      .isLength({ min: 6 }),
  ],
  updateCtrls
);
authRouter.delete("/delete", authMiddleware, deleteCtrls);
authRouter.post("/logout", authMiddleware, logoutCtrls);
module.exports = {
  authRouter,
};
