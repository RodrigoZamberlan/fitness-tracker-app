import styles from "./FoodSelect.module.css";
import { Food } from "../../../../types/Food";

interface FoodSelectProps {
    foods: Food[],
}

const FoodSelect: React.FC<FoodSelectProps> = ({foods}) => {
    return <div className={styles.containerSelect}>
        {foods && foods.map((food, index) => (
            <div className={styles.foodItem} onClick={() => console.log(food)} key={index}>
                <div className={styles.title}>{food.title}</div>
                <div className={styles.description}>{food.description}</div>
            </div>
        ))}
    </div>
}

export default FoodSelect;