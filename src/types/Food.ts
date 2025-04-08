export type Food = {
  id?: number;
  title: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  saturated_fat: number;
  fiber: number;
  sodium: number;
  brand?: string;
};

export type Macro = Pick<Food, 
  'calories' | 
  'protein' | 
  'carbs' | 
  'fat' | 
  'saturated_fat' | 
  'fiber' | 
  'sodium'
>;
