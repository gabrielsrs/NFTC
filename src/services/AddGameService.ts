import { getCustomRepository } from "typeorm";
import { GameRepositories } from "../repositories/GameRepositories";

interface IGameRequest {
 name: string;
 site: string;
 twitter: string;
 telegram?: string;
 discord?: string;
 rede: string;
}

class AddGameService {
 async execute({
  name,
  site,
  twitter,
  telegram,
  discord,
  rede,
 }: IGameRequest) {
  const gameRepository = getCustomRepository(GameRepositories);

  if(!name || !site || !twitter) {
   throw new Error("Missing Field")
  }

  const gameAlreadyExists = await gameRepository.findOne({
   name,
  });

  if(gameAlreadyExists) {
   throw new Error("Game Already Exists")
  }

  //Creating object instance
  const game = gameRepository.create({
   name,
   site,
   twitter,
   telegram,
   discord,
   rede,
  });

  //Save object
  await gameRepository.save(game);

  return game;
 }
}

export { AddGameService }

// Not exclusive to each other class but to each group of functionalities.