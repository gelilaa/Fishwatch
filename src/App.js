import React, {  useState ,useEffect} from "react";
import "./App.css";
import {Cards}from './components/Card.jsx'


function App(){
  const [fish, setfishes] = useState([]);

 
  async function allFishes() {
    try {
      const data = await fetch(`https://www.fishwatch.gov/api/species`);
      const dataJ = await data.json();
      console.log(dataJ);
      return dataJ;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
  allFishes();
})

  return (
    <div className="App">
      FishWatch
      <Cards/>
    </div>
  );
}

export default App;
