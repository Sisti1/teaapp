import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();  // useNavigate hook for navigation

  async function SendLogin(e) {
    e.preventDefault();  // Prevent default form submission
    console.log(formData);
    try {
      const response = await fetch('http://localhost:5200/api/users/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        mode: 'cors',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });
      console.log(formData.email);
      console.log(formData.password);
      console.log(response.status);
      console.log(response);
      
      if (response.ok) {
        console.log("Data Submitted ");
        alert('Login successful!');
        navigate('/');  // Redirect to homepage after successful login
      } else {
        console.error('Failed to send data:', response.status);
        setLoginError('Failed to login. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setLoginError('Error occurred during login. Please try again.');
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={{ maxWidth: '450px', margin: 'auto', padding: '20px', marginTop: '45px' }}>
      <div style={{ padding: '50px', marginBottom: '45px' }}>
        <h2>Login</h2>
        <form onSubmit={SendLogin}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', marginBottom: '20px', background: '#F8DC88', border: '2px solid white', textAlign: 'center' }}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', marginBottom: '20px', background: '#F8DC88', border: '2px solid white', textAlign: 'center' }}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}  {/* Show error message */}
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(181, 73, 19)', color: 'white', border: 'none' }}>
            <b>Login</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
