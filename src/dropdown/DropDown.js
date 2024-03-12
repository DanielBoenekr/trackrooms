
import "./DropDown.css";

export default function DropDown({id, open, onClick, labelText, children}){

    function handleClick(){ //if accordion clicked on then reverse state (default state is closed/false)
        onClick(id);
    }

    return( //what is displayed on the screen; instead of labelText do menu photo
        <div className="dropdown"> 
            <div className="label-text" onClick={handleClick}>{labelText}</div> 
            {!!open && <div>{children}</div>}
             
        </div>
    );
}