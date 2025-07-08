
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
      document.getElementById('textBox').style.backgroundColor = '#495057'; // Change textarea background color
      document.getElementById('textBox').style.color = '#f8f9fa'; // Change textarea text color      
      document.body.style.color = '#b6c2cf'; // Change text color for better
      document.body.style.transition = 'background-color 0.5s ease'; // Smooth transition for background color
      document.getElementById('textBox').style.transition = 'background-color 0.
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById('textBox').style.backgroundColor = 'white'; // Reset textarea background color
      document.getElementById('textBox').style.color = 'black'; // Reset textarea text color
      document.body.style.color ='black';
    }
  };

  return (
    <>
    <Navbar title="Editor" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Textform heading = "Enter Text Here"/>
    
    </>
  );
}

export default App;
