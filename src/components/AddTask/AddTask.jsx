import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import { CustomInput } from "../CustomInput/CustomInput";
import "./AddTask.scss";
import { CustomButton } from "../CustomButton/CustomButton";
import axios from "axios";

export const AddTask = ({ fetchTasks, setErrorMessage }) => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
    setErrorMessage("");
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        setErrorMessage(
          "A tarefa precisa de uma descrição para ser adicionada"
        );
      }

      await axios.post("http://localhost:8000/tasks", {
        description: task,
        isCompleted: false,
      });

      await fetchTasks();
      setTask("");
    } catch (error) {
      setErrorMessage("Algo deu errado.");
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
};
