export const TaskItem = ({ task }) => {
  return (
    <>
      <span>{task.id}</span>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Finalizada" : "Pendente"}</p>
    </>
  );
};
