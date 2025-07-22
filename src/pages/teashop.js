import React, { useEffect, useState } from "react";
import TeaCard from "./TeaCard";
import styled from "styled-components";
import Cookies from "js-cookie";
import { getCartItems } from "../controller/cart_controller"; // ← Make sure this is implemented

async function getProducts() {
  const token = Cookies.get("token");
  try {
    const response = await fetch("https://teaback.onrender.com/product/ProductList", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const Teashop = () => {
  const [teas, setTeas] = useState([]);
  const [cart, setCart] = useState({}); // key: productId, value: quantity

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
  
      const products = await getProducts();
      let cartMap = {};
  
      if (token) {
        try {
          const cartItems = await getCartItems();
          for (const item of cartItems) {
            cartMap[item.product_id] = item.quantity;
          }
        } catch (err) {
          console.error("Failed to fetch cart items:", err);
        }
      }
  
      setCart(cartMap);
      setTeas(products);
    };
  
    fetchData();
  }, []);
  

  const CardContainer = styled.div`
    width: 65%;
    padding: 8px;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.05);
    }
  `;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {teas.length > 0 ? (
        teas.map((tea, index) => (
          <CardContainer key={index}>
           <TeaCard
  imageUrl={tea.image_url}
  price={tea.price}
  description={tea.description}
  productId={tea._id}
  initialQty={cart[tea._id] || 0}
  isBestSeller={index === 0 || tea.price < 200} // customize condition
/>

          </CardContainer>
        ))
      ) : (
        <p>No teas available</p>
      )}
    </div>
  );
};

export default Teashop;
