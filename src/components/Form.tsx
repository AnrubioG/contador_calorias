import { categories } from "../data/categories";

export default function Form() {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          className="border border-slate-300 rounded-lg w-full p-2 bg-white"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">
          Actividad
        </label>
        <input
          id="activity"
          type="text"
          className="border border-slate-300 rounded-lg p-2"
          placeholder="Ej. Comida, Jugo de Naranja, Ejercicio, Pesas"
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
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
        value="Guardar Comida o Guardar Ejercicio"
      />
    </form>
  );
}
