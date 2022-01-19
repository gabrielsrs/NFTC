import { EntityRepository, Repository } from "typeorm";
import { Games } from "../entities/games";

@EntityRepository(Games)
class GameRepositories extends Repository <Games>{}

export { GameRepositories }


// Do a game injection
// Entity <> ORM <> DB
// layer to access DB on a operation (Communication between the entity and DB)

//Server -> Controller -> Service -> Repositories > DB