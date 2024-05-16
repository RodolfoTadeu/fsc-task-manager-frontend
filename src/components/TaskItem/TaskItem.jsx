export const TaskItem = ({ id, description, isCompleted }) => {
  return (
    <>
      <span>{id}</span>
      <p>{description}</p>
      {/* <p>{isCompleted ? "Finalizada" : "Pendente"}</p> */}
    </>
  );
};
