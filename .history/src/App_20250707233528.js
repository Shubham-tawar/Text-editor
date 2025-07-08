import "./App.css";

import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    const textBox = document.getElementById("textBox");
    const buttons = document.getElementsByClassName("btn");

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "#b6c2cf";
      document.body.style.transition = "background-color 0.5s ease";

      if (textBox) {
        textBox.style.backgroundColor = "#495057";
        textBox.style.color = "#f8f9fa";
        textBox.style.transition =
          "background-color 0.5s ease, color 0.5s ease";
      }

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#6c757d";
        buttons[i].style.color = "#f8f9fa";
        buttons[i].style.transition =
          "background-color 0.5s ease, color 0.5s ease";
        butt
      }
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      if (textBox) {
        textBox.style.backgroundColor = "white";
        textBox.style.color = "black";
      }

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = ""; // or a light color
        buttons[i].style.color = "black";
      }
    }
  };

  return (
    <>
      <Navbar
        title="Editor"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Textform heading="Enter Text Here" />
    </>
  );
}

export default App;
