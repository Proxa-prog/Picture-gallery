import { useState } from "react";
import { ThemeContext } from "../../context";
import { Page } from "../Page";

import './style.scss';

function App() {
  const [theme, setTheme] = useState('black');
  const [buttonColor, setButtonColor] = useState('sun');
  
  return (
    <div className="App">
      <ThemeContext.Provider value={{
        theme, 
        setTheme, 
        buttonColor, 
        setButtonColor,
      }}>
        <Page />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
