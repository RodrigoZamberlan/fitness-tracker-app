export type Meal = {
  id?: number;
  typeofmeal: "breakfast" | "lunch" | "snack" | "dinner";
  date: Date,
  observations?: string;
};
