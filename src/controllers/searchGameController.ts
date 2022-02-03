import { Request, Response } from "express";
import { SearchService } from "../services/searchService";

class SearchGameController {
 async  handle(request: Request, response: Response) {
  const gameName = request.query.game as string;

  const searchService = new SearchService();

  const gameInformation = await searchService.execute({
   name: gameName
  });

  return response.render("singleGame", { gameInformation })
 }
}

export { SearchGameController }