import React, {  useState ,useEffect, Fragment} from "react";
import "./App.css";
import {Cards}from './components/Card.jsx'
import { Button, Form, Row,Card,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
function App(){
  const [fish, setfishes] = useState([]);
  const [input, SetInput] = useState();
  const [search ,setSearch]=useState()

  const onChange =async (e)=>{
     e.preventDefault()
     try {
      const data = await fetch(`https://www.fishwatch.gov/api/species/${input}`);
      const dataJ = await data.json();
      const result = await Promise.resolve(dataJ);    
                    setSearch(result);        
       
     
    } catch (error) {
      console.error(error);
    }
  }
  async function allFishes() {
    try {
      const data = await fetch(`https://www.fishwatch.gov/api/species`);
      const dataJ = await data.json();
       const result = await Promise.resolve (dataJ);
        console.log(dataJ);
                    setfishes (result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
  allFishes();
},[])

  return (
    <>
    
      <div className="container2">
        <Form.Control
          placeholder="search fish here..."
          onChange={(e) => SetInput(e.target.value)}
        />
        <Button onClick={onChange}>search</Button>
      </div>
      <Row>
        {fish.map((item, index) => {
          return (
            <Fragment key={index}>
              <Col className="containere">
                <Card
                  style={{
                    width: "18rem",
                  }}
                >
                  <Card.Img src="" className="box" />
                  <Card.Body className="card-text">
                    <Card.Title>Species name:{item.Path}</Card.Title>
                    <Card.Text>harvest type:</Card.Text>
                    <Card.Text className="card-text">detail:</Card.Text>
                    <Button>Read more</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Fragment>
          );
        })}
      </Row>
      
    </>
  );
}

export default App;
