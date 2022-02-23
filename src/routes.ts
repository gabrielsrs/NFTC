import { Router } from "express";
import { AddGameController } from "./controllers/addGameController";
import { SearchGameController } from "./controllers/searchGameController";
import { HomeController } from "./controllers/homeController";
import { GamesController } from "./controllers/gamesController";

const router = Router();

const addGameController = new AddGameController();
const searchGameController = new SearchGameController();
const homeController = new HomeController();
const gamesController = new GamesController();

router.get("/", homeController.handle);
router.post("/create", addGameController.handle);
router.get("/search", searchGameController.handle);
router.get("/games", gamesController.handle);

export { router }