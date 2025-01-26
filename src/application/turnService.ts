import express from "express";
import { GameGateway } from "../dataaccess/gameGateway";
import { connectMySQL } from "../dataaccess/connection";
import { DARK, LIGHT } from "./constants";
import { Board } from "../domain/board";
import { toDisc } from "../domain/disc";
import { Turn } from "../domain/turn";
import { Point } from "../domain/point";
import { TurnRepository } from "../domain/turnRepository";

const gameGateway = new GameGateway();

const turnRepository = new TurnRepository();

class FindLatestGameTurnByTurnOutput {
  constructor(
    private _turnCount: number,
    private _board: number[][],
    private _nextDisc: number | undefined,
    private _winnerDisc: number | undefined
  ) {}

  get turnCount() {
    return this._turnCount;
  }

  get board() {
    return this._board;
  }

  get nextDisc() {
    return this._nextDisc;
  }

  get winnerDisc() {
    return this._winnerDisc;
  }
}

export class TurnService {
  async findLatestGameTurnByTurnCount(
    turnCount: number
  ): Promise<FindLatestGameTurnByTurnOutput> {
    const conn = await connectMySQL();
    try {
      const gameRecord = await gameGateway.findLatest(conn);
      if (!gameRecord) {
        throw new Error("Latest game not found");
      }

      const turn = await turnRepository.findForGameAndTurnCount(
        conn,
        gameRecord.id,
        turnCount
      );

      return new FindLatestGameTurnByTurnOutput(
        turnCount,
        turn.board.discs,
        turn.nextDisc,
        //TODO決着がついている場合、game_resultsテーブルから取得する
        undefined
      );
    } finally {
      await conn.end();
    }
  }

  async registerTurn(turnCount: number, disc: number, x: number, y: number) {
    const conn = await connectMySQL();
    //1つ前のターンを取得する
    try {
      const gameRecord = await gameGateway.findLatest(conn);
      if (!gameRecord) {
        throw new Error("Latest game not found");
      }

      const previousTurnCount = turnCount - 1;
      const previousTurn = await turnRepository.findForGameAndTurnCount(
        conn,
        gameRecord.id,
        previousTurnCount
      );

      // 石を置く
      const newTurn = previousTurn.placeNext(toDisc(disc), new Point(x, y));

      //ターンを保存する

      await turnRepository.save(conn, newTurn);

      await conn.commit();
    } finally {
      await conn.end();
    }
  }
}
