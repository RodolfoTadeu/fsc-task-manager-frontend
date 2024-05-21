import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CustomButton } from "../CustomButton/CustomButton";

import "./Sidebar.scss";
export const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/Login");
  };

  return (
    <div className="sidebar-container">
      <div className="log">
        <img src={logo} alt="Logo Full Stack Club" />
      </div>

      <div className="sign-out">
        <CustomButton onClick={handleSignOut}>Sair</CustomButton>
      </div>
    </div>
  );
};
