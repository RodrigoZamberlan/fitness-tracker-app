import { useMacros } from "../../../../hooks/useMacros";
import { Food, Macro } from "../../../../types/Food";
import styles from "./MacroList.module.css";

const MacroList: React.FC<{ foods: Food[] }> = ({ foods }) => {
  const { totalMacros } = useMacros(foods);

  return (
    <div className={styles.listOfMacros}>
        {(Object.keys(totalMacros) as (keyof Macro)[]).map((key, index) => (
            <div key={index}>
                <div>{key}: {totalMacros[key]}</div>
            </div>
        ))}
    </div>
  );
};
export default MacroList;
