import React, { useEffect, useState } from "react";
import TeaCard from "./TeaCard";
import styled from 'styled-components';
import Cookies from 'js-cookie';

async function getProducts() {
  const token = Cookies.get('token');
  console.log('Token:', token);
  
  try {
    const response = await fetch('http://localhost:5200/product/ProductList', {
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

const Teashop = () => {
  const [teas, setTeas] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      if (Array.isArray(products)) {
        setTeas(products); // Set the 'data' array as 'teas'
      } else {
        setTeas([]);  // Ensure it's an empty array if the API response is not an array
      }
    };

    fetchProducts();
  }, []); // Empty array means it runs on component mount

  const CardContainer = styled.div`
    width: 65%;
    padding: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  `;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {teas.length > 0 ? ( teas.map((tea, index) => (
          
          <CardContainer key={index}>
            {/* Pass the correct fields to TeaCard */}
            <TeaCard 
              imageUrl={tea.image_url} 
              price={tea.price} 
              description={tea.description} 
              productId={tea._id}
            />
          </CardContainer>
        )))
        
        : (
        <p>No teas available</p> // Handle case where teas is empty
      )}
    </div>
  );
};

export default Teashop;
