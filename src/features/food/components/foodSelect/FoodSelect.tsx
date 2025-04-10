import styles from "./FoodSelect.module.css";
import { Food } from "../../../../types/Food";

interface FoodSelectProps {
  foods: Food[];
  handleSelectFood: (food: Food) => void;
}

const FoodSelect: React.FC<FoodSelectProps> = ({ foods, handleSelectFood }) => {
  return (
    <div>
      <h2>Add the foods</h2>
      <div className={styles.containerSelect}>
        {foods &&
          foods.map((food) => (
            <div
              onClick={() => handleSelectFood(food)}
              className={styles.foodItem}
              key={food.id}
            >
              <div className={styles.title}>{food.title}</div>
              <div className={styles.description}>{food.description}</div>
            </div>
          ))}
      </div>

      <button>Create more</button>
    </div>
  );
};

export default FoodSelect;
