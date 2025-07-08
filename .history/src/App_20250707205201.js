
import './App.css';
import Darktheme from './components/Darktheme';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="Editor" aboutText="About"/>
    <Textform heading = "Enter Text Here"/>
    <Darktheme />
    </>
  );
}

export default App;
