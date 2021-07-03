import { App } from "@tinyhttp/app";
import * as express from "express";
import * as path from "path";
const HydycoAdmin = new App();
const staticServer: any = express.static("build");

HydycoAdmin.use(staticServer);

HydycoAdmin.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export { HydycoAdmin };
