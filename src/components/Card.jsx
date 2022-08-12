import React from "react";

import {Card,Col,Button} from "react-bootstrap";
import './style.css'
import {logo} from "./logo.png"
import 'bootstrap/dist/css/bootstrap.css';

export const Cards =(name,type,onhandel,img,detail)=>{
return(
  <>
  <Col className="containere">
        <Card style={{ width: '18rem',backgroundColor:'rgb(155, 199, 237);' }}>
  <Card.Img  src= {img} className="box"/>
    <Card.Body className="card-text">
      <Card.Title>Species name:</Card.Title>
      <Card.Text>harvest type:</Card.Text>
      <Card.Text className="card-text">detail:{detail}</Card.Text>
       <Button>Read more</Button>
    </Card.Body>
   </Card>
    </Col>
   </> 
)
}