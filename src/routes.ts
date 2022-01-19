import { Router } from "express";
import { AddGameController } from "./controllers/addGameController";
import { SearchGameController } from "./controllers/searchGameController";

const router = Router();

const addGameController = new AddGameController();
const searchGameController = new SearchGameController();

router.post("/game/create", addGameController.handle)
router.post("/home", searchGameController.handle)

export { router }