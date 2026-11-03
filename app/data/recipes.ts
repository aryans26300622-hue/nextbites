// app/data/recipes.ts
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "veggie-tacos", title: "Veggie Tacos", emoji: "🌮", minutes: 20, difficulty: "Easy", cuisine: "Mexican" },
  { id: "chicken-ramen", title: "Chicken Ramen", emoji: "🍜", minutes: 45, difficulty: "Hard", cuisine: "Japanese" },
  { id: "paneer-tikka", title: "Paneer Tikka", emoji: "🍢", minutes: 30, difficulty: "Medium", cuisine: "Indian" },
  { id: "caesar-salad", title: "Caesar Salad", emoji: "🥗", minutes: 15, difficulty: "Easy", cuisine: "American" },
  { id: "pancakes", title: "Fluffy Pancakes", emoji: "🥞", minutes: 25, difficulty: "Easy", cuisine: "American" },
];