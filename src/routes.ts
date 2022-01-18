import { Router } from "express";
import { AddGameController } from "./controllers/AddGameController";

const router = Router();

const addGameController = new AddGameController();

router.post("/game/create", addGameController.handle)

export { router }