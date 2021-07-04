"use strict";
const { Router } = require("express");
const express = require("express");
const path = require("path");
const HydycoAdmin = Router();

HydycoAdmin.use(express.static(path.join(__dirname, "public")));

HydycoAdmin.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = { HydycoAdmin };
