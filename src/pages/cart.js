import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = Cookies.get('token');

      try {
        const response = await fetch('http://localhost:5200/cart/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch cart');
        }

        const result = await response.json();
        const enriched = result?.cart?.products?.filter(Boolean).map(p => ({
          ...p,
          quantity: 1,
        })) || [];
        setCartItems(enriched);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const incrementQty = (index) => {
    setCartItems(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (index) => {
    setCartItems(prev =>
      prev
        .map((item, i) => {
          if (i === index) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null; // mark for removal
            }
          }
          return item;
        })
        .filter(Boolean)
    );
  };
  const handleCheckout = async () => {
    try {
      const token = Cookies.get('token');
  
      // Send only the product IDs as expected by backend
      const productIds = cartItems.map(item => item._id); // Just IDs, no quantity
  
      console.log('Checkout Product IDs:', productIds);
  
      const response = await fetch('http://localhost:5200/cart/update', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: productIds }), // Array of ObjectIds
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Checkout failed: ${errorData.message || 'Unknown error'}`);
      }
  
      const result = await response.json();
      console.log('Checkout successful:', result);
      alert('Checkout successful!');
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('There was an error with your checkout. Please try again.');
    }
  };
  

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={item._id || index} className="cart-item">
              <div className="cart-item-image">
                <Card.Img
                  variant="top"
                  src={item.imageUrl}
                  onError={(e) => { e.target.src = "/fallback.jpg"; }}
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>
              <div className="cart-item-details">
                <h4>{item.product_name}</h4>
                <p>₹ {item.price}</p>
                <div className="qty-controls">
                  <Button variant="outline-secondary" onClick={() => decrementQty(index)}>-</Button>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <Button variant="outline-secondary" onClick={() => incrementQty(index)}>+</Button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Total: ₹ {total}</h2>
            <Button variant="success" onClick={handleCheckout}>Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
