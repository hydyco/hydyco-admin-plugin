"use strict";
var express_1 = require("express");
var express = require("express");
var path = require("path");
var HydycoAdmin = express_1.Router();
HydycoAdmin.use(express.static(path.join(__dirname, "public")));
HydycoAdmin.get("/*", function (req, res) {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});
module.exports = { HydycoAdmin: HydycoAdmin };
