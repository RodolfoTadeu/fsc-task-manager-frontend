import Logo from "../../assets/images/logo-2.png";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import "./Login.scss";

export const Login = () => {
  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" />
      <div className="button-container">
        <CustomButton>Entar</CustomButton>
      </div>
    </div>
  );
};
