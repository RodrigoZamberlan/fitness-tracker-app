import { useEffect, useState } from "react";
import { Food } from "../../../types/Food";

export const useFoods = () => {
    const [foods, setFoods] = useState<Food[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getFoods = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5221/api/foods");

            if (!response.ok) {
                throw new Error("Fail to fetch the foods");
            }

            const foodsFetched = await response.json() as Food[];
            setFoods(foodsFetched);

        } catch (error) {
            setError(error instanceof Error ? error.message : "The api server is not avaliable");
        } finally {
            setLoading(false);
        }
    }

    const addFood = async (food: Food) => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5221/api/foods", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(food)
            });

            if (!response.ok) {
                throw new Error("Fail to add the new food");
            }

            const foodAdded = await response.json() as Food;
            setFoods(prev => ({...prev, foodAdded}));

        } catch (error) {
            setError(error instanceof Error ? error.message : "The api server is not avaliable");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getFoods();
    }, []);

    return { foods, addFood, loading, error }
}