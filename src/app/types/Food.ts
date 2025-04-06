export type Food = {
  id: number;
  title: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sodium: number;
  brand?: string;
};

export type Meal = {
  id: number;
  typeofmeal: "LUNCH" | "DINNER" | "BREAKFAST" | "SNACK";
  date: string;
  observations?: string;
  meal_foods: [];
};

export type MealFood = {
  id: number;
  food_id: number;
  meal_id: number;
  quantity_size_amount: number;
  quantity_size_unit: string;
};