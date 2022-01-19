import { Request, Response } from "express";
import { AddGameService } from "../services/addGameService";

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

  const gameInformation = await addGameService.execute({
   name,
   site,
   twitter,
   telegram,
   discord,
   rede,
  });
  
  return response.json(gameInformation);
 }
}

export { AddGameController }

// Get the information from route and pass to service 