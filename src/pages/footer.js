import React from 'react';
import './footer.css'; 
import '@fortawesome/fontawesome-free/css/all.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h3><strong>About Us</strong></h3>
            <p><b>With each sip, we embark on a journey of tranquility and enlightenment, embracing the harmony of nature and the wisdom of centuries past.</b></p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h3><strong>Contact Us</strong></h3>
            <p><b>Email: globaltradingcomapny@gmail.com</b></p>
            <p><b>Phone: 9719562218</b></p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
