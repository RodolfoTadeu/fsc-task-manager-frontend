import "./Sidebar.scss";

import logo from "../../assets/images/logo.png";
import { CustomButton } from "../CustomButton/CustomButton";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="log">
        <img src={logo} alt="Logo Full Stack Club" />
      </div>

      <div className="sign-out">
        <CustomButton>Sair</CustomButton>
      </div>
    </div>
  );
};
