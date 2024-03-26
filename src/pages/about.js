import React from "react";
import './about.css';
import { Link } from "react-router-dom";
const About = () => {
	return (
		<div className="about-us-container">
      <div className="about-us-image">
        <img src="https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg" alt="About Us" />
      </div>
      <div className="about-us-content">
        <h2>About Our Tea Application</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          turpis ut risus semper varius. Vestibulum ac enim vitae nulla
          eleifend sollicitudin vel in ipsum. Integer id dolor sit amet nibh
          imperdiet luctus.
        </p>
        <p>
          Sed ac metus eget lacus pretium aliquet. Integer ut augue et velit
          rutrum aliquam. Fusce nec tortor nec nisl volutpat pretium. Nam nec
          mi a sapien mollis posuere.
        </p>
        <Link to="/teashop" className="explore-button">Explore More</Link>
      </div>
    </div>
	  );
};

export default About;
