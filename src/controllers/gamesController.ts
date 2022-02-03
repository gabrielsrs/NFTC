import { Request, Response } from "express";
import { GamesService } from "../services/gamesService";

class GamesController {
 async handle(request: Request, response:Response) {

  const gamesService = new GamesService();
  
  const libraryGames = gamesService.execute();

  // return response.render("games", { libraryGames })
  return response.json(libraryGames);
 }
}

export { GamesController }