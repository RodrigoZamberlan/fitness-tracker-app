import "./App.css";
import FoodSelect from "./features/food/components/foodSelect/FoodSelect";
import { useFoods } from "./features/food/hooks/useFoods";

function App() {
  const { foods, loading, error } = useFoods();

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return <div>
    <FoodSelect foods={foods}/>
  </div>;
}

export default App;
