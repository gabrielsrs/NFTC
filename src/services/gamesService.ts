import { getCustomRepository } from "typeorm";
import { GameRepositories } from "../repositories/gameRepositories";

class GamesService {
 async execute() {
  const gameRepository = getCustomRepository(GameRepositories);

  const allGames = await gameRepository.find();
  console.log(allGames)
  return allGames;
 }
}

export { GamesService }