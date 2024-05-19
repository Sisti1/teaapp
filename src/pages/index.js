// pages/index.js
import React, { useRef } from 'react';
import "./index.css";
import image1 from  "../pages/images/img1.jpg";
import image2 from "../pages/images/img2.jpg";
import image3  from "../pages/images/img3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"

const Home = () => {
  return (
    <div
      className='div1'
      style={{
        height: '30%',
        backgroundColor: '#F8DC88',
      }}
    >
      <div className='div2'>
        <AutoPlayMethods />
      </div>
    </div>
  );
};

const AutoPlayMethods = () => {
  let sliderRef = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">     
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div>
        <img src={image1} alt="" className="slider-image" />

        </div>
        <div>
        <img src={image2} alt="" className="slider-image" />

        </div>
        <div>
        <img src={image3} alt="" className="slider-image" />

        </div>       
      </Slider>      
    </div>
  );
};

export default Home;