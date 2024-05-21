import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import "./Login.scss";

import Logo from "../../assets/images/logo-2.png";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/");
  };
  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" />
      <div className="button-container">
        <CustomButton onClick={handleSignInClick}>Entar</CustomButton>
      </div>
    </div>
  );
};
