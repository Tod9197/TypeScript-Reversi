export const WinnerDisc = {
  Draw: 0,
  Drak: 1,
  Light: 2,
} as const;

export type WinnerDisc = (typeof WinnerDisc)[keyof typeof WinnerDisc];
