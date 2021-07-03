"use strict";
exports.__esModule = true;
exports.HydycoAdmin = void 0;
var app_1 = require("@tinyhttp/app");
var express = require("express");
var path = require("path");
var HydycoAdmin = new app_1.App();
exports.HydycoAdmin = HydycoAdmin;
var staticServer = express.static("build");
HydycoAdmin.use(staticServer);
HydycoAdmin.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
