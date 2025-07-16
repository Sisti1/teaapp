import React from "react";
import './about.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-image">
        <img
          src="https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg"
          alt="About Kailash Tea"
        />
      </div>

      <div className="about-us-content">
        <h2>About Kailash Tea</h2>
        <p>
          At <strong>Kailash Tea</strong>, we bring you premium, garden-fresh teas straight from trusted plantations. With a wide range of flavors and blends, our app makes it easy to explore, order, and enjoy the perfect cup — anytime, anywhere.
        </p>
        <p>
          We’re here to deliver quality, taste, and the true essence of tea, right to your doorstep.
        </p>
        <p>
          <em>Kailash Tea — Sip the Tradition.</em>
        </p>
        <Link to="/teashop" className="explore-button">Explore Our Teas</Link>
      </div>
    </div>
  );
};

export default About;
