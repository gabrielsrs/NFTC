import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response } from "express";
import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response) => {
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