import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log('Form submitted:', formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div style={{ maxWidth: '450px', margin: 'auto', padding: '20px' ,marginTop: '45px'}}>
    <div style={{ border: '2px solid rgb(181, 73, 19)', backgroundColor: ' #F8DC88', padding: '50px', marginBottom: '45px'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '10px' }}
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
            style={{ width: '100%', marginBottom: '10px' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(181, 73, 19)', color: 'black', border: 'none' }}>Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
