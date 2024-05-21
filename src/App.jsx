import { Routes, Route } from "react-router-dom";

import { Home } from "../src/pages/Home/Home";

import "./App.scss";
import { Login } from "./pages/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
