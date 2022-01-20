import { Request, Response } from "express";
import { SearchService } from "../services/searchService";

class SearchGameController {
 async handle(request: Request, response: Response) {
  const {
   game
  } = request.body

  const searchService = new SearchService();

  const gameQuery = await searchService.execute({
   name: game
  });

  if(gameQuery){
   return response.render("singleGame", {gameQuery});
  }

  return response.render("home")  
 }
}

export { SearchGameController }