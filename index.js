const express = require("express");
const env = require("dotenv").config();
const mongoose = require("./src/config/db");
const { authRouter } = require("./src/router/authRouter");
const { menuRouter } = require("./src/router/menuRouter");

const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/menu", menuRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is Running on the Port no ${port}`);
});
