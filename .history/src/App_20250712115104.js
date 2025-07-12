import "./App.css";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import About from "./components/About";

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
      document.title = "Text Editor - Dark Mode";
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
        buttons[i].style.borderColor = "#6c757d"; // Optional: Change border color for better visibility
      }
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "Text Editor - Light Mode";
      document.body.style.transition = "background-color 0.5s ease";

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
    <Router>
      <Navbar
        title="Editor"
        
        mode={mode}
        toggleMode={toggleMode}
      />
      
      <div>
        <Routes>
          <Route exact path="/" element={<Textform heading="hghgh" />} />
          <Route exact path="/about" element={<About />} />
          
        </Routes>
      </div>
    </Router>
      
    </>
  );
}

export default App;
