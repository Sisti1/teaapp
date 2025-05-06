import React, { useState } from 'react';
// import emailjs from 'emailjs-com'; // Import the EmailJS library
import "./contact.css";

function Contact() {
  const date = new Date();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    time: date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds()
  });
  
  async function sendContactUs() {
    console.log(formData);
    try {
      const response = await fetch('http://localhost:5200/contact/submit', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        mode: 'cors',
        body: JSON.stringify({
          name: formData.name,
          emailAddress: formData.email,
          feedback: formData.feedback,
          time: formData.time
        })
      });
  
      console.log(response.status);
  
      if (response.ok) {
        console.log("Data Submitted ");
        alert('Feedback sent successfully!');
      } else {
        console.error('Failed to send feedback:', response.status);
        alert('Failed to send feedback. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      alert('Error sending feedback. Please try again later.');
    }
  }
  const handleChange = (e) => {
    console.log(e.target+"THISI SEEEEEEE")
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_qd1zee6', 'template_comztml', e.target, 'ez2CfZx1WPR3l0eR6')
  //     .then((response) => {

  //       alert('Feedback sent successfully!');
  //       setFormData({
  //         name: '',
  //         email: '',
  //         feedback: ''
  //       });
  //     }, (err) => {
  //       alert('Failed to send feedback. Please try again later.');
  //       console.log('FAILED...', err);
  //     });


  // };

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
        <form onSubmit={sendContactUs}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '20px' ,background:'	#F8DC88' ,border:'2px solid white'}}
            required
          /> <br />

          <label htmlFor="email">Email Address:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '20px' ,background:'#F8DC88' ,border:'2px solid white'}}
            required
          />  <br />

          <label htmlFor="feedback">Feedback:</label><br />
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '20px' ,background:'#F8DC88' ,border:'2px solid white'}}
            required
          ></textarea>  <br />

          <button type="submit" style={{backgroundColor: ' rgb(181, 73, 19)', color: 'white', border: '2px solid white' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
