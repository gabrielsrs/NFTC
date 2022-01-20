import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
const path = require("path");

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
 if(err instanceof Error) {
  return response.status(400).json({
   error: err.message,
  });
 }

 return response.status(500).json({
  err: "error",
  message: "Internal Server Error"
 });
});

app.listen(5000, () => console.log("ON!!"))



//Serve -> Routes -> Controller -> Service -> Repositories -> DB