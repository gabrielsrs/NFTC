import { Request, Response } from "express";
import { AddGameService } from "../services/AddGameService";

class AddGameController {
 async handle (request: Request, response: Response) {
  const {
   name,
   site,
   twitter,
   telegram,
   discord,
   rede,
  } = request.body;

  const addGameService = new AddGameService();

  const game = await addGameService.execute({
   name,
   site,
   twitter,
   telegram,
   discord,
   rede,
  });
  
  return response.json(game);
 }
}

export { AddGameController }

// Get the information from route and pass to service 