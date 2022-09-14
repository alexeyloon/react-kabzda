import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import OnOff from "./components/OnOf/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/Accordion";
import UnControlledRating from "./components/UnControlledRating/Rating";

//function declaration
function App() {
    console.log("App rendering");
    return (
        <div>
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}

            {/*<Rating value={1}/>*/}

            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            <OnOff/>
            <UnControlledAccordion titleValue={"Menu"} />
            <UnControlledAccordion titleValue={"Users"} />
            <UnControlledRating value={2}/>
        </div>
    );
}

export default App;
