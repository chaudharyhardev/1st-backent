const express = require("express");

const path = require('path');
const rootDir = require("../utils/util");
const home = express.Router();

// home.get("/", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "home.html"));
// });
home.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = home;
