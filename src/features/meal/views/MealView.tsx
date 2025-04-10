import { useState } from "react";
import FoodSelect from "../../food/components/foodSelect/FoodSelect";
import { useFoods } from "../../food/hooks/useFoods";
import { Food } from "../../../types/Food";
import MacroList from "../../food/components/macroList/MacroList";
import styles from "./MealView.module.css";

const MealView: React.FC = () => {
  const { foods } = useFoods();
  const [foodsMeal, setfoodsMeal] = useState<Food[]>([]);

  const selectFood = (food: Food) => {
    if (!foodsMeal.includes(food)) {
      setfoodsMeal((prev) => [...prev, food]);
    }
  };

  const removeFood = (foodId: Food["id"]) => {
    setfoodsMeal((prev) => prev.filter((food) => food.id !== foodId));
  };

  return (
    <section className={styles.mealView}>
      <FoodSelect foods={foods} handleSelectFood={selectFood} />

      <div>
        <h2>Foods on the meal</h2>
        <div className={styles.listMealFoods}>
          {foodsMeal &&
            foodsMeal.map((food) => (
              <div className={styles.itemMealFood} key={food.id}>
                
                <h2>{food.title}</h2>
                
                <div className={styles.containerFields}>
                  <div className={styles.field}>
                    <label htmlFor="quantity_amout_size">Quantity</label>
                    <input name="quantity_amout_size" type="number"/>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="quantity_amout_unit">Unit</label>
                    <select name="quantity_amout_unit">
                      <option value="grams">Grams (g)</option>
                      <option value="miligrams">Miligrams (mg)</option>
                      <option value="mililiters">Mililiters (ml)</option>
                      <option value="unit">Unit</option>
                    </select>
                  </div>
                </div>

                <button onClick={() => removeFood(food.id)}>Remove</button>
              </div>
            ))}
        </div>

        <button>Register Meal</button>
      </div>

      <div>
        <h2>Macros</h2>
        <MacroList foods={foodsMeal} />
      </div>
    </section>
  );
};

export default MealView;
