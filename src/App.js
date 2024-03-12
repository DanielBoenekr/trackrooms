import { useState } from "react";
import './App.css';
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
    <div>
      <DropDown 
        id="1" 
        labelText="Gebäude" 
        open={openAccordionId === "1"}
        onClick={handleAccordionClick}
      >
      <h3>6A</h3>
      <h3>6B</h3>
      </DropDown>
    </div>
  );
}
export default App;
