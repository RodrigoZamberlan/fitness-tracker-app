import { Food, Macro } from "../types/Food";

export const useMacros = (foodsMeal: Food[]) => {
    
    const totalMacros = foodsMeal.reduce((acc, food) => {
        (Object.keys(acc) as (keyof Macro)[]).forEach((key) => {
          acc[key] += food[key];
        });
        return acc;
      }, {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        saturated_fat: 0,
        fiber: 0,
        sodium: 0
      } as Macro);

      return {totalMacros}
}