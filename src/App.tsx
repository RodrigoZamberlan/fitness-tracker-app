import { useState } from "react";
import "./App.css";
import FoodSelect from "./features/food/components/foodSelect/FoodSelect";
import { useFoods } from "./features/food/hooks/useFoods";
import { Food } from "./types/Food";
import MacroList from "./features/food/components/macroList/MacroList";
import CreateFood from "./features/food/views/CreateFood";

function App() {
  const { foods, loading, error } = useFoods();
  const [foodsMeal, setfoodsMeal] = useState<Food[]>([]);

  const selectFood = (food: Food) => {
    if (!foodsMeal.includes(food)) {
      setfoodsMeal(prev => ([...prev, food]));
    }
  }

  const removeFood = (foodId: Food['id']) => {
    setfoodsMeal(prev => prev.filter(food => food.id !== foodId));
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return <div>
    <FoodSelect foods={foods} handleSelectFood={selectFood}/>

    <CreateFood />

    <div>
      {foodsMeal && foodsMeal.map((food) => (
        <div key={food.id}>
          <div>{food.title}</div>
          <button onClick={() => removeFood(food.id)}>Remove</button>
        </div>
      ))}
    </div>

      <MacroList foods={foodsMeal} />
  </div>;
}

export default App;
