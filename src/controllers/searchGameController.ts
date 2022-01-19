import { Request, Response } from "express";
import { SearchService } from "../services/searchService";

class SearchGameController {
 async handle(request: Request, response: Response) {
  const {
   game
  } = request.body

  const searchService = new SearchService();

  const gameQuery = await searchService.execute({
   name: game //Inside my head this work, but if not change everything to name 
  });

  return response.json(gameQuery);
 }
}

export { SearchGameController }