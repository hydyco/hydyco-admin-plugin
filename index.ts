import { Router } from "express";
import * as express from "express";
import * as path from "path";
const HydycoAdmin = Router();

HydycoAdmin.use(express.static(path.join(__dirname, "public")));

HydycoAdmin.get("/*", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

export = { HydycoAdmin };
