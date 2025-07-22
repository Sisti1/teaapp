import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './sigup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [signUpError, setSignUpError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSignUpError('');

    try {
      const response = await fetch('https://teaback.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          username: formData.fullname,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        Cookies.set('token', token, {
          expires: 1,
          secure: true,
          sameSite: 'strict',
        });

        alert('New user added!');
        navigate('/');
      } else {
        setSignUpError('Sign-up failed. Please check the fields and try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSignUpError('Something went wrong. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ maxWidth: '450px', margin: 'auto', padding: '20px' }}>
      <div style={{ padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="input-field"
              style={{
                width: '100%',
                marginBottom: '10px',
                background: '#F8DC88',
                border: '2px solid white',
              }}
            />
            {errors.fullname && <p style={{ color: 'red' }}>{errors.fullname}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              style={{
                width: '100%',
                marginBottom: '10px',
                background: '#F8DC88',
                border: '2px solid white',
              }}
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
              className="input-field"
              style={{
                width: '100%',
                marginBottom: '10px',
                background: '#F8DC88',
                border: '2px solid white',
              }}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>

          {signUpError && <p style={{ color: 'red' }}>{signUpError}</p>}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: 'rgb(181, 73, 19)',
              color: 'white',
              border: '2px solid white',
              fontWeight: 'bold',
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
