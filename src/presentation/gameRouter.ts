import express from "express";
import { TurnGateway } from "../infrastructure/turnGateway";
import { GameGateway } from "../infrastructure/gameGateway";
import { SquareGateway } from "../infrastructure/squareGateway";
import { connectMySQL } from "../infrastructure/connection";
import { GameService } from "../application/service/gameService";

export const gameRouter = express.Router();

const gameService = new GameService();

gameRouter.post("/api/games", async (req, res) => {
  await gameService.startNewGame();

  res.status(201).end();
});
