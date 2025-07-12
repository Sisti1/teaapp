import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import teaImage from './images/tea.png';
import { getCartItems, updateCartItems, submitOrder } from '../controller/cart_controller';
import './cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart on mount
  useEffect(() => {
    const loadCart = async () => {
      try {
        const items = await getCartItems();
        console.log("📦 Loaded cart items:", items);
        setCartItems(items);
      } catch (err) {
        console.error("❌ Error loading cart items:", err);
      } finally {
        setLoading(false);
      }
    };
    loadCart();
  }, []);

  const updateAndSyncCart = async (updatedCart) => {
    console.log("📝 Cart before update:", updatedCart);
    setCartItems(updatedCart);
    try {
      await updateCartItems(updatedCart);
      console.log("✅ Cart updated on server.");
    } catch (err) {
      console.error("❌ Failed to update cart:", err);
    }
  };

  const incrementQty = (index) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateAndSyncCart(updatedCart);
  };

  const decrementQty = (index) => {
    const updatedCart = cartItems
      .map((item, i) => {
        if (i === index && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return i === index ? null : item;
      })
      .filter(Boolean);
    updateAndSyncCart(updatedCart);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    try {
      await submitOrder(cartItems, total);
      alert('✅ Order placed!');
      setCartItems([]); // Clear cart
    } catch (err) {
      alert(`❌ Failed to place order: ${err.message}`);
    }
  };

  return (
    <div className="cart">
      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src={teaImage} alt="Empty cart" className="empty-cart-image" />
          <p>Your cart is empty.</p>
          <Button
            style={{ backgroundColor: "rgb(181, 73, 19)", border: "1px solid white" }}
            href="/teashop"
          >
            Explore Teas
          </Button>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={item._id || index} className="cart-item">
              <div className="cart-item-image">
                <Card.Img
                  variant="top"
                  src={item.image_url}
                  onError={(e) => {
                    e.target.src = "/fallback.jpg";
                  }}
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
            <Button
              style={{ backgroundColor: "rgb(181, 73, 19)", border: "1px solid white" }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
