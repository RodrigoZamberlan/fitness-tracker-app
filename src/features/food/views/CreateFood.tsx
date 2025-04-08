import { FormEvent, useRef } from "react";
import { Food } from "../../../types/Food";
import { useFoods } from "../hooks/useFoods";

const CreateFood: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const { addFood, loading, error } = useFoods();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;

    if (!form) return;

    const foodToAdd: Food = {
        title: (form.elements.namedItem('title') as HTMLInputElement).value,
        description: (form.elements.namedItem('description') as HTMLInputElement).value,
        calories: parseFloat((form.elements.namedItem('calories') as HTMLInputElement).value),
        protein: parseFloat((form.elements.namedItem('protein') as HTMLInputElement).value),
        carbs: parseFloat((form.elements.namedItem('carbs') as HTMLInputElement).value),
        fat: parseFloat((form.elements.namedItem('fat') as HTMLInputElement).value),
        saturated_fat: parseFloat((form.elements.namedItem('saturated_fat') as HTMLInputElement).value),
        fiber: parseFloat((form.elements.namedItem('fiber') as HTMLInputElement).value),
        sodium: parseFloat((form.elements.namedItem('sodium') as HTMLInputElement).value),
      };

      addFood(foodToAdd);

  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
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
          <input name="calories" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="protein">Protein (g)</label>
          <input name="protein" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="carbs">Carbs (g)</label>
          <input name="carbs" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="fat">Fat (g)</label>
          <input name="fat" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="saturated_fat">Saturated Fat (g)</label>
          <input name="saturated_fat" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="fiber">Fiber (g)</label>
          <input name="fiber" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="sodium">Sodium (mg)</label>
          <input name="sodium" type="number" required />
        </div>

        <button type="submit" disabled={loading}>{loading ? 'loading' : 'Create'}</button>
      </form>

      {error && <div>{error}</div>}
    </div>
  );
};

export default CreateFood;
