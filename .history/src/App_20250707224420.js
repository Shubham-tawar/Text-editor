
import './App.css';
import Darktheme from './components/Darktheme';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  
  return (
    <>
    <Navbar title="Editor" aboutText="About" mode="dark"/>
    <Textform heading = "Enter Text Here"/>
    <Darktheme />
    </>
  );
}

export default App;
