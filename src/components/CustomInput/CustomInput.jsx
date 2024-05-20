import "./CustomInput.scss";

export const CustomInput = ({
  label,
  value,
  onChange,
  onEnterPress,
  setErrorMessage,
}) => {
  const handleKeyDown = (e) => {
    if (value.length > 0 && e.key === "Enter") {
      onEnterPress();
    } else {
      setErrorMessage("A tarefa precisa de uma descrição para ser adicionada");
    }
  };

  return (
    <div className="custom-input-container">
      <input
        type="text"
        className="custom-input"
        value={value}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {label ? (
        <label
          className={`${value.length > 0 ? "shrink" : ""} custom-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
