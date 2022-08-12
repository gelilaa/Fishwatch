import React, {  useState ,useEffect} from "react";
import "./App.css";
import {Cards}from './components/Card.jsx'
import { Button, Form} from "react-bootstrap";
function App(){
  const [fish, setfishes] = useState([]);
  const [input, SetInput] = useState();

  const onChange =async (e)=>{
     e.preventDefault()
     try {
      const data = await fetch(`https://www.fishwatch.gov/api/species`);
      const dataJ = await data.json();
       SetInput(dataJ)
     
    } catch (error) {
      console.error(error);
    }
  }
  async function allFishes() {
    try {
      const data = await fetch(`https://www.fishwatch.gov/api/species`);
      const dataJ = await data.json();
      console.log(dataJ.species_name);
    setfishes (dataJ);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
  allFishes();
},[])

  return (
    <div className="App">
      FishWatch
      {fish.map((item, index) => {
        return (
          <Cards key ={index} name= {item.speciesname} type={item.type}/>
          
        );
      })}
      <Form.Control
        placeholder="search fish here..."
        onChange={(e) => SetInput(e.target.value)}
      />
      <Button onClick={onChange}>search</Button>
      {input}
    </div>
  );
}

export default App;
