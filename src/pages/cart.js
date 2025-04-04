import React, { useState } from 'react';
import './cart.css';
import Cookies from 'js-cookie';





async function cartProduct(){
  const token =Cookies.get('token');
  console.log('Token:',token)


try {
  const response = await fetch('http://localhost:5200/Cart/CartList', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, 
    },
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


const Cart = () => {
  const initialItems = [
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 15, quantity: 2 },
    { id: 3, name: 'Item 3', price: 20, quantity: 1 },
  ];

  const [cartItems, setCartItems] = useState(initialItems);

  const handleAdd = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <div>
            <button onClick={() => handleRemove(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleAdd(item.id)}>+</button>
          </div>
          <p>${item.price * item.quantity}</p>
        </div>
      ))}
      <div className="cart-summary">
        <h2>Total: ${total}</h2>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
