import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cookies from "js-cookie";
import { FaTrash, FaPlus } from "react-icons/fa";
import "./teashop.css";

import { addToCart, updateProductQty, removeFromCart } from "../services/cart_services";

const TeaCard = ({ imageUrl, price, description, productId, initialQty }) => {
  const [quantity, setQuantity] = useState(initialQty || 0);
  const token = Cookies.get("token");

  const handleAddToCart = async () => {
    try {
      await addToCart(productId, token);
      setQuantity(1);
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  const handleUpdateQuantity = async (newQty) => {
    try {
      if (newQty < 1) {
        await removeFromCart(productId, token);
        setQuantity(0);
      } else {
        console.log("Updating product to in tea card:", productId);
        await updateProductQty(productId, newQty, token, price);  // pass price here
        setQuantity(newQty);
      }
    } catch (error) {
      console.error("Update quantity failed:", error);
    }
  };
  

  return (
    <div className="card1">
      <div className="div1">
        <Card.Img variant="top" src={imageUrl} className="tea-image" />
      </div>
      <div className="div2">
        <Card.Body>
          <Card.Title>₹ {price}</Card.Title>
          <Card.Text>{description}</Card.Text>

          {quantity === 0 ? (
            <Button
              variant="primary"
              style={{
                backgroundColor: "rgb(181, 73, 19)",
                border: "1px solid white",
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          ) : (
            <div className="cart-toggle">
              <FaTrash onClick={() => handleUpdateQuantity(0)} className="icon-btn" />
              <span className="qty-display">{quantity}</span>
              <FaPlus onClick={() => handleUpdateQuantity(quantity + 1)} className="icon-btn" />
            </div>
          )}
        </Card.Body>
      </div>
    </div>
  );
};

export default TeaCard;
