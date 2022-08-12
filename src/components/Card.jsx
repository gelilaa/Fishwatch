import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cards =(name,type,onhandel)=>{
return(
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {type}
        </Card.Text>
        <Button variant="primary" onClick={onhandel}>read more</Button>
      </Card.Body>
    </Card>
)
}