import "./TaskItem.scss";

import { AiFillDelete } from "react-icons/ai";

export const TaskItem = ({
  task,
  deleteTask,
  handleTaskCompletionOnChange,
}) => {
  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          {task.description}
          <input
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={(e) => handleTaskCompletionOnChange(task._id, e)}
          />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>

      <div className="delete">
        <AiFillDelete
          size={18}
          color="#F97474"
          onClick={() => deleteTask(task._id)}
        />
      </div>
    </div>
  );
};
