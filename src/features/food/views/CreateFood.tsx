import { FormEvent } from "react";
import { Food } from "../../../types/Food";
import { useFoods } from "../hooks/useFoods";

const getStringValue = (formData: FormData, keyName: string): string => (formData.get(keyName)?.toString().trim() ?? "");
const getNumberValue = (formData: FormData, keyName: string): number => (parseFloat(formData.get(keyName)?.toString() ?? "0"));

const CreateFood: React.FC = () => {
  const { addFood, loading, error } = useFoods();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const foodToAdd: Food = {
      title: getStringValue(form, 'title'),
      description: getStringValue(form, 'description'),
      calories: getNumberValue(form, 'calories'),
      protein: getNumberValue(form, 'protein'),
      carbs: getNumberValue(form, 'carbs'),
      fat: getNumberValue(form, 'fat'),
      saturated_fat: getNumberValue(form, 'saturated_fat'),
      fiber: getNumberValue(form, 'fiber'),
      sodium: getNumberValue(form, 'sodium'),
    };

    const success = await addFood(foodToAdd);

    if (success) {
      event.currentTarget.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Name</label>
          <input name="title" required />
        </div>

        <div className="field">
          <label htmlFor="description">Short Description</label>
          <input name="description" required />
        </div>

        <div className="field">
          <label htmlFor="calories">Calories (kcal)</label>
          <input name="calories" type="number" min="0" step="0.1" required />
        </div>

        <div className="field">
          <label htmlFor="protein">Protein (g)</label>
          <input name="protein" type="number" min="0" step="0.1" required />
        </div>

        <div className="field">
          <label htmlFor="carbs">Carbs (g)</label>
          <input name="carbs" type="number" min="0" step="0.1" required />
        </div>

        <div className="field">
          <label htmlFor="fat">Fat (g)</label>
          <input name="fat" type="number" min="0" step="0.1" required />
        </div>

        <div className="field">
          <label htmlFor="saturated_fat">Saturated Fat (g)</label>
          <input name="saturated_fat" type="number" min="0" step="0.1" required />
        </div>

        <div className="field">
          <label htmlFor="fiber">Fiber (g)</label>
          <input name="fiber" type="number" min="0" step="0.1" required />
        </div>

        <div className="field">
          <label htmlFor="sodium">Sodium (mg)</label>
          <input name="sodium" type="number" min="0" step="1" required />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "loading" : "Create"}
        </button>
      </form>

      {error && <div>{error}</div>}
    </div>
  );
};

export default CreateFood;
