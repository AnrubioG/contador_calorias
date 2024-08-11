import { useState, ChangeEvent, FormEvent, Dispatch } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityActions } from "../reducers/activity-reducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
};

export default function Form({ dispatch }: FormProps) {
  const initalState: Activity = {
    id: uuidv4(),
    category: 1,
    name: "",
    calories: 0,
  };

  const [activity, setActivity] = useState<Activity>(initalState);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity({ ...initalState, id: uuidv4() });
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          className="border border-slate-300 rounded-lg w-full p-2 bg-white"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad
        </label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 rounded-lg p-2"
          placeholder="Ej. Comida, Jugo de Naranja, Ejercicio, Pesas"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorías
        </label>
        <input
          id="calories"
          type="number"
          className="border border-slate-300 rounded-lg p-2"
          placeholder="Ej. 300 o 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white disabled:opacity-10"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
