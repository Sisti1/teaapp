// ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProductDetails = () => {
  const { id } = useParams();
  const [tea, setTea] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const token = Cookies.get('token');
      try {
        const response = await fetch(`https://3.109.210.27:5200/product/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error("Failed to fetch");

        const result = await response.json();
        setTea(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!tea) return <p>Loading...</p>;

  return (
    <div style={{
      padding: '60px',
      backgroundColor: '#f6f3f0',
      minHeight: '100vh',
      fontFamily: 'Arial'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid #6b2e06',
        borderRadius: '10px',
        boxShadow: '2px 1px 10px 1px rgb(105, 43, 4)',
        backgroundColor: '#fffaf7',
        padding: '40px'
      }}>
        <img src={tea.image_url} alt="tea" style={{ width: '250px', marginRight: '40px' }} />
        <div>
          <h1 style={{ color: '#a13d08' }}>{tea.name}</h1>
          <p style={{ fontSize: '18px', margin: '20px 0' }}>{tea.description}</p>
          <h2>₹ {tea.price}</h2>
          <button style={{
            backgroundColor: '#a13d08',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '5px',
            marginTop: '20px',
            fontSize: '16px'
          }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
