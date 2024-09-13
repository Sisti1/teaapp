import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './teashop.css';


const TeaCard = ({ imageUrl, price, description }) => {
  
 

return (
    <div className="card1">
      <div className="div1">
        <Card.Img variant="top" src={imageUrl} style={{ width: '150px', height:'150px',}}/>
      </div>
      <div className="div2">
        <Card.Body>
          <Card.Title>₹ {price}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" style={{backgroundColor:'rgb(181, 73, 19)', border:'1px solid white'}}>Add to Cart</Button>
        </Card.Body>
      </div>
    </div>
  );
};

export default TeaCard;