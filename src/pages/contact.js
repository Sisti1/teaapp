import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import the EmailJS library
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qd1zee6', 'template_comztml', e.target, 'ez2CfZx1WPR3l0eR6')
      .then((response) => {

        alert('Feedback sent successfully!');
        setFormData({
          name: '',
          email: '',
          feedback: ''
        });
      }, (err) => {
        alert('Failed to send feedback. Please try again later.');
        console.log('FAILED...', err);
      });


  };

  return (

    <div className="contact-container">

      <div className="contact-details">

        <div>
          <h2>Get in touch</h2>
          <p>We are a company with trustworthy customers since 23 years.</p>
          <p>With each sip, we embark on a journey of tranquility and enlightenment, embracing the harmony of nature and the wisdom of centuries past.</p>
        </div>
        <div>
          <h3>Our Contact Information</h3>
          <p>Email: globaltradingcompany@gmail.com</p>
          <p>Phone: 9719562218</p>
          <h3>Opening Hours</h3>
          <p>Tuesday/sunday 9:30-7:30</p>
          <p>Monday Closed</p>
        </div>
      </div>
      <div className="feedback-form">
        <h2>Send Us Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /> <br />

          <label htmlFor="email">Email Address:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />  <br />

          <label htmlFor="feedback">Feedback:</label><br />
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>  <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
