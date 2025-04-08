import { useMacros } from "../../../../hooks/useMacros";
import { Food, Macro } from "../../../../types/Food";

const MacroList: React.FC<{ foods: Food[] }> = ({ foods }) => {
  const { totalMacros } = useMacros(foods);

  return (
    <>
        {(Object.keys(totalMacros) as (keyof Macro)[]).map((key, index) => (
            <div key={index}>
                <div>{key}: {totalMacros[key]}</div>
            </div>
        ))}
    </>
  );
};
export default MacroList;
