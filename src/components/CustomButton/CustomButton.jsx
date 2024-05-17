import "./CustomButton.scss";

export const CustomButton = ({ chidren, onClick }) => {
  return (
    <div className="custom-button-container" onClick={onClick}>
      {chidren}
    </div>
  );
};
