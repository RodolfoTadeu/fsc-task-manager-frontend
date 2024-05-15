import { TaskItem } from "../Task/TaskItem";

export const TaskList = ({ tasks }) => {
  return tasks.map((task) => <TaskItem task />);
};
