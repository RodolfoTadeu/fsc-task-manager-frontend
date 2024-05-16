import "./CustomInput.scss";

export const CustomInput = ({ label, value }) => {
  return (
    <div className="custom-input-container">
      <input className="custom-input" />
      {label ? (
        <label
          className={`${value.length !== 0 ? "shrink" : ""} custom-input-label`}
        >
          {" "}
        </label>
      ) : null}
    </div>
  );
};
