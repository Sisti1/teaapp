import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './teashop.css'
const Teashop = () => {
  return (
    <div className="center">
    <div  className="card1" >
    <div className="div1">
        <Card.Img variant="top" src="https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg" style={{ width: '150px', height:'150px',marginBottom:'50px'}}/>
      </div>
      <div className="div2">
        <Card.Body>
          <Card.Title>₹ 230</Card.Title>
          <Card.Text>Description of the tea</Card.Text>
          <Button variant="primary"style={{backgroundColor:' rgb(181, 73, 19)', border:'1px solid white'}}>Add to Cart</Button>
        </Card.Body>
      </div>
    </div>
  </div>


);

};

export default Teashop;
