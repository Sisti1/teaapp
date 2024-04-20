import React from "react";
import TeaCard from "./TeaCard";
import styled from 'styled-components';

const Teashop = () => {
  // Sample tea data for demonstration
  const teas = [
    {
      imageUrl: 'https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg',
      price: 230,
      description: 'Description of tea 1'
    },
    {
      imageUrl: 'https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg',
      price: 230,
      description: 'Description of tea 2'
    },
    {
      imageUrl: 'https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg',
      price: 230,
      description: 'Description of tea 3'
    },
    {
      imageUrl: 'https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg',
      price: 230,
      description: 'Description of tea 4'
    },
    // Add more tea items as needed
  ];

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
      {teas.map((tea, index) => (
        <CardContainer key={index}>
          <TeaCard imageUrl={tea.imageUrl} price={tea.price} description={tea.description} />
        </CardContainer>
      ))}
    </div>
  );
};

export default Teashop;