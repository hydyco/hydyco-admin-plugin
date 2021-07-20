import { Router } from "express";
import * as express from "express";
import * as path from "path";
const HydycoAdmin = Router();

HydycoAdmin.use("/static/*", (req, res, next) => {
  return res.redirect("/admin-ui");
});

HydycoAdmin.use(express.static(path.join(__dirname, "public")));

HydycoAdmin.use("/admin-ui/*", (req, res, next) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

export = { HydycoAdmin };
