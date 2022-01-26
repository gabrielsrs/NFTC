import { getCustomRepository } from "typeorm";
import { GameRepositories } from "../repositories/gameRepositories";

interface ISearchGame {
 name: string;
}

class SearchService{
 async execute({
  name
 }: ISearchGame ) {
  const gameRepository = getCustomRepository(GameRepositories);
  
  // This research's case sensitive
  const searchGame = await gameRepository.findOne({
   name
  });

  // Handle error in home page
  if(!searchGame) {
   throw Error("Game not Found");
  }

  // Do this dynamic (static by now)
  const loadIcon = require("../public/static/iIcon.json")

  const gameInfoBuild = {
   "name": searchGame.name,
   "redirects": {
    "site": [
     searchGame.site, loadIcon.site
    ],
    "twitter": [
     searchGame.twitter, loadIcon.twitter
    ],
    "telegram": [
     searchGame.telegram, loadIcon.telegram
    ],
    "discord": [
     searchGame.discord, loadIcon.discord
    ],
   },
   "rede": searchGame.rede
  }
  
  return gameInfoBuild;
 }
}

export { SearchService }