import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import OnOff from "./components/OnOf/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/Accordion";
import UnControlledRating from "./components/UnControlledRating/Rating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";

//function declaration
function App() {
    let[ratingValue,setRatingValue]=useState< RatingValueType>(0)
    let[accordionCollapsed,setAccordionCollapsed]=useState< boolean>(false)
    let[switchOn,setSwitchOn]=useState< boolean>(false)
    console.log("App rendering");
    return (
        <div className={"App"}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={ ()=>{setAccordionCollapsed(!accordionCollapsed)} }/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UnControlledOnOff  onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<UnControlledAccordion titleValue={"Menu"}/>*/}
            {/*<UnControlledAccordion titleValue={"Users"}/>*/}
            <UnControlledRating/>

            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}
        </div>
    );
}

export default App;
