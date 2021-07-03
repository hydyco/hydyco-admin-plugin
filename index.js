"use strict";
const express = require("express");
const path = require("path");
const HydycoAdmin = new express();
HydycoAdmin.use("/", express.static(path.join(__dirname, "public")));
export { HydycoAdmin };
