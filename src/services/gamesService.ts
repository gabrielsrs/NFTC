import { getCustomRepository } from "typeorm";
import { GameRepositories } from "../repositories/gameRepositories";

class GamesService {
 async execute() {
  const gameRepository = getCustomRepository(GameRepositories);

  const allGames = await gameRepository.find({
   select: [
    "name", 
    "site",
    "twitter", 
    "discord"
   ]
  });

  return allGames
 }
}

export { GamesService }