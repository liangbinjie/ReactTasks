import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      task: task.title,
      id: tasks.length,
      description: task.description
    }])
    update()
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
    update()
  }

  function update() {
    tasks.forEach((task, i) => {
      task.id = i
    })
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}