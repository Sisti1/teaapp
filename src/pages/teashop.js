import React, { useEffect, useState } from "react";
import TeaCard from "./TeaCard";
import styled from "styled-components";
import Cookies from "js-cookie";
import { getCartItems } from "../controller/cart_controller"; // ← Make sure this is implemented

async function getProducts() {
  const token = Cookies.get("token");
  try {
    const response = await fetch("http://localhost:5200/product/ProductList", {
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
      const [products, cartItems] = await Promise.all([getProducts(), getCartItems()]);

      const cartMap = {};
      for (const item of cartItems) {
        cartMap[item.product_id] = item.quantity;
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
              initialQty={cart[tea._id] || 0} // 👈 Send existing cart quantity
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
