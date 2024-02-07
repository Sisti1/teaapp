// pages/index.js
import React from 'react';
import "./index.css";
import { Carousel } from "react-bootstrap";

const Home = () => {
return (
	<div className='div1'
	style={{
		
		height: '530px',
		backgroundColor:'#F8DC88',
}}
	>
<div className='div2'>
	
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fw800/background/20231103/pngtree-elegant-coffee-cups-against-a-backdrop-of-black-textured-wallpaper-image_13763663.png"
          alt="First slide"
        />
		<Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is some sample text for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fw800/background/20231103/pngtree-elegant-coffee-cups-against-a-backdrop-of-black-textured-wallpaper-image_13763663.png"
          alt="Second slide"
        />
		<Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is some sample text for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fw800/background/20231103/pngtree-elegant-coffee-cups-against-a-backdrop-of-black-textured-wallpaper-image_13763663.png"
          alt="Third slide"
        />
		<Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is some sample text for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		</div>
	</div>
);
};

export default Home;
