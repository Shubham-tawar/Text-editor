
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import './App.css';
import Darktheme from './components/Darktheme';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
i
function App() {
  const [mode, setMode] = useState('light');
  return (
    <>
    <Navbar title="Editor" aboutText="About" mode="dark"/>
    <Textform heading = "Enter Text Here"/>
    <Darktheme />
    </>
  );
}

export default App;
