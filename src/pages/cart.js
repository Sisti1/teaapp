import React, { useState } from 'react';
import './cart.css';

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
