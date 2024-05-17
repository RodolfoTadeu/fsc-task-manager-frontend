import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import { CustomInput } from "../CustomInput/CustomInput";
import "./AddTask.scss";
import { CustomButton } from "../CustomButton/CustomButton";

export const AddTask = ({ setErrorMessage }) => {
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
    } catch (error) {}
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
