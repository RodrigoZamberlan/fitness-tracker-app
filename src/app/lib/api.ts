import { Food, Meal } from "../types/Food";

async function fetchData<T>(path: string): Promise<T> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
    console.log(`${API_URL}/${path}`);

  if (!API_URL) {
    throw new Error("The api url is missing at the .env file");
  }

  try {
    const response = await fetch(`${API_URL}/${path}`);

    if (!response.ok) {
      throw new Error("Faild to fetch response status is not ok");
    }

    return response.json();
  } catch (error) {
    throw new Error("The api server is not avaliable");
  }
}

export async function getFoods() {
    try {
        const foods = await fetchData<Food[]>("foods");
        return { foods, error: null };
    } catch (error) {
        return { foods: null, error: error instanceof Error ? error.message : "Fail to fetch the foods"};
    }
}

export async function getMeals(): Promise<Meal[]> {
  return await fetchData<Meal[]>("meals");
}
