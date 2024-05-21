import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Task } from "../../components/Tasks/Tasks";

import "./Home.scss";

export const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Task />
    </div>
  );
};
