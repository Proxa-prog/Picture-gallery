import { useState } from "react";
import { ThemeContext } from "../../context";
import { Page } from "../Page";

import './style.scss';

function App() {
  const [theme, setTheme] = useState('black');
  const [buttonColor, setButtonColor] = useState('sun');
  const [logoColor, setlogoColor] = useState('logo_white');
  
  return (
    <div className="App">
      <ThemeContext.Provider value={{
        theme, 
        setTheme, 
        buttonColor, 
        setButtonColor,
        logoColor,
        setlogoColor
      }}>
        <Page />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
