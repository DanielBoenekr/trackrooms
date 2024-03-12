import React, { useState } from 'react';
import Header from '../header/Header';
import DropDown from "../dropdown/DropDown"

function FirstPage() {
    const [openAccordionId, setOpenAccordionId] = useState(null);

    const handleAccordionClick = (id) => {
        setOpenAccordionId(id);
    };

    return (
        <div>
            <Header />
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
        </div>
    );
}

export default FirstPage;

