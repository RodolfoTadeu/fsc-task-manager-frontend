import "./CustomButton.scss";

export const CustomButton = ({ children, onClick }) => {
  return (
    <div className="custom-button-container" onClick={onClick}>
      {children}
    </div>
  );
};
