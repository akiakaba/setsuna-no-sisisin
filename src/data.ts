export const opponents = [
  { name: "green-sisisin", time: 600, image: "green_sisisin.jpg" },
  { name: "undead-sisisin", time: 350, image: "undead_sisisin.png" },
  { name: "gold-sisisin", time: 240, image: "gold_sisisin.jpg" },
] as const;
export type Opponent = typeof opponents[number];
