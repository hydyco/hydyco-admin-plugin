"use strict";
var express_1 = require("express");
var express = require("express");
var path = require("path");
var HydycoAdmin = express_1.Router();
HydycoAdmin.use("/img", express.static(path.join(__dirname, "public", "img")));
HydycoAdmin.use("/static", express.static(path.join(__dirname, "public", "static")));
HydycoAdmin.use("/admin-ui/*", express.static(path.join(__dirname, "public")));
module.exports = { HydycoAdmin: HydycoAdmin };
