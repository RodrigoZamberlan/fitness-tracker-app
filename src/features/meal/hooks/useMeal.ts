import { useEffect, useState } from "react";
import { Meal } from "../../../types/Meal";

export const useMeal = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5221/api/meals");
      if (!response.ok) {
        throw new Error("Fail to fetch the meals");
      }

      const mealsFetched = await response.json();
      setMeals(mealsFetched);
      setError(null);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Fail to comunicate with the api"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const createMeal = async (meal: Meal): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5221/api/meals", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(meal),
      });

      if (!response.ok) {
        throw new Error("Fail to add the meal");
      }

      const mealAdded = (await response.json()) as Meal;
      setMeals((prev) => ({ ...prev, mealAdded }));
      setError(null);
      return true;
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Fail to comunicate with the api"
      );

      return false;
    } finally {
      setLoading(false);
    }
  };

  return { meals, createMeal, loading, error };
};
