import { Router } from "express";
import { AddGameController } from "./controllers/addGameController";
import { SearchGameController } from "./controllers/searchGameController";

const router = Router();

const addGameController = new AddGameController();
const searchGameController = new SearchGameController();

router.post("/create", addGameController.handle)

router.get("/", (req, res) => {
  res.render("home")
});

router.get("/search", searchGameController.handle)

export { router }