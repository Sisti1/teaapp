// src/components/Cart.jsx
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  loadCartItems,
  checkoutCart,
  placeOrder,
} from "../controllers/cartController";
import "./../styles/cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const items = await loadCartItems();
        setCartItems(items);
      } catch (err) {
        console.error("Failed to load cart:", err);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const incrementQty = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (index) => {
    setCartItems((prev) =>
      prev
        .map((item, i) =>
          i === index && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : i === index
            ? null
            : item
        )
        .filter(Boolean)
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      await checkoutCart(cartItems);
      alert("Checkout successful!");
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error with your checkout. Please try again.");
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const result = await placeOrder(cartItems, total);
      console.log("Order placed:", result);
      alert("Order placed successfully!");
      setCartItems([]);
    } catch (error) {
      console.error("Order error:", error);
      alert("Error placing order. Please try again.");
    }
  };

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
                  onError={(e) => {
                    e.target.src = "/fallback.jpg";
                  }}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="cart-item-details">
                <h4>{item.product_name}</h4>
                <p>₹ {item.price}</p>
                <div className="qty-controls">
                  <Button
                    variant="outline-secondary"
                    onClick={() => decrementQty(index)}
                  >
                    -
                  </Button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <Button
                    variant="outline-secondary"
                    onClick={() => incrementQty(index)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Total: ₹ {total}</h2>
            <Button variant="success" onClick={handleCheckout}>
              Update Cart
            </Button>{" "}
            <Button variant="primary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
