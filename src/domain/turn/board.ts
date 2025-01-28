import { Disc, isOppositeDisc } from "./disc";
import { Move } from "./move";
import { Point } from "./point";

export class Board {
  private _wallDiscs: Disc[][];

  constructor(private _discs: Disc[][]) {
    this._wallDiscs = this.wallDiscs();
  }

  place(move: Move): Board {
    // 空のマス目ではない場合、置くことはできない
    if (this._discs[move.point.y][move.point.x] !== Disc.Empty) {
      throw new Error("Selected point is not empty");
    }

    // ひっくり返せる点をリストアップ
    const flipPoints = this.listFlipPoints(move);

    // ひっくり返せる点がない場合、置くことはできない
    if (flipPoints.length === 0) {
      throw new Error("Flip points is empty");
    }

    //盤面をコピー
    const newDiscs = this._discs.map((line) => {
      return line.map((disc) => {
        return disc;
      });
    });
    // 石を置く
    newDiscs[move.point.y][move.point.x] = move.disc;
    // TODOひっくり返す

    return new Board(newDiscs);
  }

  private listFlipPoints(move: Move): Point[] {
    const flipPoints: Point[] = [];

    const walldX = move.point.x + 1;
    const walledY = move.point.y + 1;

    // 上
    const flipCandidate: Point[] = [];

    // 1つ動いた位置から開始
    let cursorX = walldX;
    let cursorY = walledY - 1;

    // 手と逆の色の石がある間、1つずつ見ていく
    while (isOppositeDisc(move.disc, this._wallDiscs[cursorY][cursorX])) {
      // 番兵を考慮して-1する
      flipCandidate.push(new Point(cursorX - 1, cursorY - 1));
      cursorY--;
      // 次の手が同じ色の石なら、ひっくり返す石が確定
      if (move.disc === this._wallDiscs[cursorY][cursorX]) {
        flipPoints.push(...flipCandidate);
        break;
      }
    }

    return flipPoints;
  }

  private wallDiscs(): Disc[][] {
    const walled: Disc[][] = [];

    const topAndBottomWall = Array(this._discs[0].length + 2).fill(Disc.Wall);

    walled.push(topAndBottomWall);

    this._discs.forEach((line) => {
      const walledLine = [Disc.Wall, ...line, Disc.Wall];
      walled.push(walledLine);
    });

    //
    walled.push(topAndBottomWall);

    return walled;
  }

  get discs() {
    return this._discs;
  }
}

const E = Disc.Empty;
const D = Disc.Dark;
const L = Disc.Light;

const INITIAL_DISCS = [
  [E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E],
  [E, E, E, D, L, E, E, E],
  [E, E, E, L, D, E, E, E],
  [E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E],
];

export const initialBoard = new Board(INITIAL_DISCS);
