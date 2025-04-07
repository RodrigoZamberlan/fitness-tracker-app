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

            const data = await response.json() as Food[];
            setFoods(data);

        } catch (error) {
            setError(error instanceof Error ? error.message : "The api server is not avaliable");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getFoods();
    }, []);

    return { foods, loading, error }
}