import { getCustomRepository } from "typeorm";
import { GameRepositories } from "../repositories/gameRepositories";

interface ISearchGame {
 name: string;
}

class SearchService{
 async execute ({
  name
 }: ISearchGame) {
  const gameRepository = getCustomRepository(GameRepositories);

  const searchGame = await gameRepository.findOne({
   name,
  });

  if(!searchGame) {
   throw Error("Game not Found");
  }
  
  return searchGame
 }
}

export { SearchService }