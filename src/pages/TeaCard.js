import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './teashop.css';
import Cookies from 'js-cookie';


const TeaCard = ({ imageUrl, price, description }) => {
  
  async function addToCart(productId) {
    const token = Cookies.get('token');
    console.log('Token:', token);
    
    try {
      const response = await fetch('http://localhost:5200/cart/add', {
      
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, 
          
        },
        body:JSON.stringify({
         'productId':productId
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const result = await response.json();
      console.log(result);
      
      // Extract the data array from the result
      return result.data; 
      
    } catch (error) {
      console.error('Error fetching products:', error);
      return []; // Return an empty array on error to avoid issues with .map
    }
  }

return (
    <div className="card1">
      <div className="div1">
        <Card.Img variant="top" src={imageUrl} style={{ width: '150px', height:'150px',}}/>
      </div>
      <div className="div2">
        <Card.Body>
          <Card.Title>₹ {price}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" style={{backgroundColor:'rgb(181, 73, 19)', border:'1px solid white'}} onClick={addToCart}>Add to Cart</Button>
        </Card.Body>
      </div>
    </div>
  );
};

export default TeaCard;