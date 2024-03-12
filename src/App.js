import { useState } from "react";
import './App.css';

import FirstPage from './firstPage/FirstPage';

import DropDown from './dropdown/DropDown.js';


//push these nuts

function App() { 

  const[openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordionId((prevValue) => {
      return prevValue === accordionId ? null : accordionId
    });
  };

  return (

    <div className="App">
    <FirstPage/>

    <div>
      <DropDown 
        id="1" 
        labelText="Gebäude" 
        open={openAccordionId === "1"}
        onClick={handleAccordionClick}
      
      <h3>6A</h3>
      <h3>6B</h3>
      </DropDown>

    </div>
  );
}
export default App;
