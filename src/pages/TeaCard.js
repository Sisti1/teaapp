import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./teashop.css";
import Cookies from "js-cookie";

const TeaCard = ({ imageUrl, price, description, productId }) => {
  const addToCart = async () => {
    const token = Cookies.get("token");
    console.log("Token:", token);
    console.log("TeaCard received productId:", productId);

    try {
      const response = await fetch("http://localhost:5200/cart/add", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "productId": productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      const result = await response.json();
      console.log("Cart updated:", result);
      // You might want to show a toast or notification here
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="card1">
      <div className="div1">
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="div2">
        <Card.Body>
          <Card.Title>₹ {price}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="primary"
            style={{ backgroundColor: "rgb(181, 73, 19)", border: "1px solid white" }}
            onClick={addToCart}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </div>
    </div>
  );
};

export default TeaCard;
