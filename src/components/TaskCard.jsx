import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ data }) {
  const {deleteTask} = useContext(TaskContext)
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{data.task}</h1>
      <p className="text-gray-500 text-sm">{data.description}</p>
      <button className="bg-red-500 px-2 py-1 mt-4 rounded-md hover:bg-red-400" onClick={() => deleteTask(data.id)}>Borrar tarea</button>
    </div>
  );
}

export default TaskCard;
