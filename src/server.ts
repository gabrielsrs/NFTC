import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { router } from "./routes";
import { RenderError } from "./error";
const path = require("path");

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));

const renderError = new RenderError();
app.use(renderError.handle);

app.listen(5000, () => console.log("ON!!"))



//Serve -> Routes -> Controller -> Service -> Repositories -> DB