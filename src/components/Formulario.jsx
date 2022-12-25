import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Formulario() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2x1 font-bold text-white mb-3">Agregar tarea</h1>
        <input
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        />
        <div className="flex justify-end">
        <button className="bg-indigo-400 px-3 py-1 rounded-md text-white">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
