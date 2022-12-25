import "../index.css";
import TaskCard from './TaskCard'
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl text-center mt-2">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((data) => (
        <TaskCard key={data.id} data={data}/>
      ))}
    </div>
  );
}

export default TaskList;
