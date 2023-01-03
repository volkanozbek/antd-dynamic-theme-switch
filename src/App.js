import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import "./App.css";
import SwitchButton from "./components/switchButton";

function App() {
  const { currentTheme } = useThemeSwitcher();
  console.log(currentTheme);

  return (
    <div className="main fade-in">
      <h1>The current theme is {currentTheme}</h1>
      <SwitchButton />
    </div>
  );
}

export default App;
