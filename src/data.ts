export const opponents = [
  { name: "first", time: 600 },
  { name: "second", time: 350 },
  //   { name: "third", time: 240 },
] as const;
export type Opponent = typeof opponents[number];
