import logo from './logo.svg';
import './App.css';
import './DropDown.js';
import DropDown from './dropdown/DropDown.js';

//push these nuts

function App() { 
  return (
    <div>
      <DropDown 
        id="1" 
        labelText="My Profile" 
        open={openAccordionId === "1"}
        onClick={handleAccordionClick}
      ></DropDown>
    </div>
  );
}
export default App;
