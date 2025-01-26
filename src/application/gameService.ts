import { connectMySQL } from "../infrastructure/connection";
import { TurnRepository } from "../domain/turn/turnRepository";
import { firstTurn } from "../domain/turn/turn";
import { GameRepository } from "../domain/game/gameRepository";
import { Game } from "../domain/game/game";

const gameRepository = new GameRepository();
const turnRepositry = new TurnRepository();

export class GameService {
  async startNewGame() {
    const now = new Date();

    const conn = await connectMySQL();
    try {
      await conn.beginTransaction();

      const game = await gameRepository.save(conn, new Game(undefined, now));
      if (!game.id) {
        throw new Error("game.id not exist");
      }

      const turn = firstTurn(game.id, now);

      await turnRepositry.save(conn, turn);

      await conn.commit();
    } finally {
      await conn.end();
    }
  }
}
