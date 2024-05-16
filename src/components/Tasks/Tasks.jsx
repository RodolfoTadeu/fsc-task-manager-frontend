import { useEffect, useState } from "react";
import axios from "axios";
import "./Tasks.scss";

import { TaskItem } from "../TaskItem/TaskItem";

export const Task = () => {
  const [tasks, setTasks] = useState([]);

  console.log("TASKS ==>", tasks);

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

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>
      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <TaskItem id={lastTask.id} description={lastTask.description} />
            ))}
          {/* {console.log("TT", tasks)} */}
          {/* {tasks.filter((tasks) => tasks.isCompleted === false)} */}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <p>{completedTask.description}</p>
            ))}
        </div>
      </div>
      {/* {tasks.map((task) => (
        <TaskItem
          id={task.id}
          description={task.description}
          isCompleted={task.isCompleted}
        />
      ))} */}
    </div>
  );
};
