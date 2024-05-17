import { useEffect, useState } from "react";
import axios from "axios";
import "./Tasks.scss";

import { TaskItem } from "../TaskItem/TaskItem";
import { AddTask } from "../AddTask/AddTask";

export const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${id}`);
      await fetchTasks();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>
      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <AddTask setErrorMessage={setErrorMessage} fetchTasks={fetchTasks} />
        <p className="error-message">{errorMessage}</p>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <TaskItem task={lastTask} deleteTask={deleteTask} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <TaskItem task={completedTask} />
            ))}
        </div>
      </div>
    </div>
  );
};
