import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import PageTitle from './components/PageTitle/PageTitle';
import Rating from './components/Rating/Rating';

//function declaration
function App() {
  console.log("App renderig");
  return (
    <div>
      <PageTitle title = {"This is App component"}/>
      Article 1
      <Rating value = {2}/>
      <Accordion />
      Article 2
      <Rating value = {3}/>
    </div>
  );
}

export default App;
