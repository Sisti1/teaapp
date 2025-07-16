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
            <p><b>Email: kailashteaa@gmail.com</b></p>
            <p><b>Phone: +91-9719562218</b></p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
