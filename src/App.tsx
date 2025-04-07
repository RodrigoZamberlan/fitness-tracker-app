import { useEffect, useState } from "react";
import "./App.css";
import { Food } from "./types/Food";

function App() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFoods = async (): Promise<Food[]> => {
    try {
      const response = await fetch("http://localhost:5221/api/foods");
      if (!response.ok) throw new Error("Fail to fetch the foods");
      return response.json() as Promise<Food[]>;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "The api server is not running");
    }
  };

  useEffect(() => {
    const getFoods = async () => {
      try {
        setLoading(true);
        const allFoods = await fetchFoods();
        setFoods(allFoods);
        setError(null);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Fail to fetch the foods");
      } finally {
        setLoading(false);
      }
    }

    getFoods();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return <div>
    {foods && foods.map((food, index) => (<div key={index}>{food.title}</div>))}
  </div>;
}

export default App;
