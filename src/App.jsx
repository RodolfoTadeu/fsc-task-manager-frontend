import "./App.scss";

import { Sidebar } from "./components/Sidebar/Sidebar";
import { Task } from "./components/Tasks/Tasks";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Task />
    </div>
  );
};

export default App;
