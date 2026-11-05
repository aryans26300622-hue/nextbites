// app/data/recipes.ts
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil"],
    steps: [
      "Stretch the dough into a round base.",
      "Spread the sauce and add mozzarella.",
      "Bake hot until the crust blisters, then top with basil.",
    ],
  },
  {
    id: "veggie-tacos",
    title: "Veggie Tacos",
    emoji: "🌮",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Mexican",
    ingredients: ["Corn tortillas", "Black beans", "Avocado", "Lime", "Salsa"],
    steps: [
      "Warm the beans in a pan with a pinch of salt.",
      "Toast the tortillas until soft and lightly charred.",
      "Fill with beans and avocado, then finish with salsa and lime.",
    ],
  },
  {
    id: "chicken-ramen",
    title: "Chicken Ramen",
    emoji: "🍜",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: ["Ramen noodles", "Chicken broth", "Chicken thigh", "Soft-boiled egg", "Spring onion"],
    steps: [
      "Simmer the broth with soy sauce and ginger.",
      "Cook the chicken and slice it thin.",
      "Boil the noodles, then add them to the bowl with broth.",
      "Top with chicken, egg and spring onion.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🍢",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Indian",
    ingredients: ["Paneer", "Yogurt", "Tikka masala spice", "Capsicum", "Onion"],
    steps: [
      "Mix the yogurt with the spices to make the marinade.",
      "Coat the paneer and vegetables and rest for 15 minutes.",
      "Thread onto skewers and grill until charred at the edges.",
    ],
  },
  {
    id: "caesar-salad",
    title: "Caesar Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Romaine lettuce", "Parmesan", "Croutons", "Caesar dressing"],
    steps: [
      "Chop the lettuce and place it in a large bowl.",
      "Toss with the dressing until evenly coated.",
      "Top with parmesan and croutons.",
    ],
  },
  {
    id: "pancakes",
    title: "Fluffy Pancakes",
    emoji: "🥞",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Flour", "Milk", "Egg", "Baking powder", "Butter", "Maple syrup"],
    steps: [
      "Whisk the flour, baking powder, milk and egg into a smooth batter.",
      "Pour small rounds into a buttered pan.",
      "Flip when bubbles appear and cook until golden, then serve with syrup.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}