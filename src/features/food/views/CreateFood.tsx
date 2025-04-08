import { FormEvent, useRef } from "react";
import { Food } from "../../../types/Food";
import { useFoods } from "../hooks/useFoods";

const CreateFood: React.FC = () => {
  const titleInput = useRef<HTMLInputElement | null>(null);
  const descriptionInput = useRef<HTMLInputElement | null>(null);
  const caloriesInput = useRef<HTMLInputElement | null>(null);
  const proteinInput = useRef<HTMLInputElement | null>(null);
  const carbsInput = useRef<HTMLInputElement | null>(null);
  const fatInput = useRef<HTMLInputElement | null>(null);
  const saturatedFatInput = useRef<HTMLInputElement | null>(null);
  const fiberInput = useRef<HTMLInputElement | null>(null);
  const sodiumInput = useRef<HTMLInputElement | null>(null);

  const { addFood, loading, error } = useFoods();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const foodToAdd: Food = {
      title: titleInput.current!.value,
      description: descriptionInput.current!.value,
      calories: parseFloat(caloriesInput.current!.value),
      protein: parseFloat(proteinInput.current!.value),
      carbs: parseFloat(carbsInput.current!.value),
      fat: parseFloat(fatInput.current!.value),
      saturated_fat: parseFloat(saturatedFatInput.current!.value),
      fiber: parseFloat(fiberInput.current!.value),
      sodium: parseFloat(sodiumInput.current!.value),
    };

    addFood(foodToAdd);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Name</label>
          <input ref={titleInput} name="title" required />
        </div>

        <div className="field">
          <label htmlFor="description">Short Description</label>
          <input ref={descriptionInput} name="description" required />
        </div>

        <div className="field">
          <label htmlFor="calories">Calories (kcal)</label>
          <input ref={caloriesInput} name="calories" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="protein">Protein (g)</label>
          <input ref={proteinInput} name="protein" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="carbs">Carbs (g)</label>
          <input ref={carbsInput} name="carbs" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="fat">Fat (g)</label>
          <input ref={fatInput} name="fat" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="saturated_fat">Saturated Fat (g)</label>
          <input ref={saturatedFatInput} name="saturated_fat" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="fiber">Fiber (g)</label>
          <input ref={fiberInput} name="fiber" type="number" required />
        </div>

        <div className="field">
          <label htmlFor="sodium">Sodium (mg)</label>
          <input ref={sodiumInput} name="sodium" type="number" required />
        </div>

        <button type="submit" disabled={loading}>{loading ? 'loading' : 'Create'}</button>
      </form>

      {error && <div>{error}</div>}
    </div>
  );
};

export default CreateFood;
