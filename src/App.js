import React, { usestate } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";
const App = () => {
  const [darkTheme, setDarkTheme] = usestate(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <h1>App</h1>
    </div>
  );
};

export default App;
