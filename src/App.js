import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TaskItem } from "./components/Task/TaskItem";

const App = () => {
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
    <>
      {tasks.map((task) => (
        <>
          <TaskItem
            key={task.id}
            id={task.id}
            description={task.description}
            isCompleted={task.isCompleted}
          />
        </>
      ))}

      {/* <button onClick={handleTranslate}>{textButton}</button> */}
    </>
  );
};

export default App;
