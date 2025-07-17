import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const SendLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5200/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        mode: 'cors',
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        Cookies.set('token', token, { expires: 1, secure: true, sameSite: 'strict' });

        setShowPopup(true);

        // Navigate after 5 seconds
        setTimeout(() => {
          setShowPopup(false);
          navigate('/');
        }, 3000);
      } else {
        setLoginError('Failed to login. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      setLoginError('An error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ maxWidth: '450px', margin: 'auto', padding: '20px', marginTop: '45px' }}>
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#f4e1b1',
          color: '#6b4226',
          padding: '20px 30px',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          fontWeight: 'bold',
          zIndex: 1000,
          textAlign: 'center',
          fontSize: '18px'
        }}>
          🍵 Tea brewing... Redirecting...
        </div>
      )}

      <div style={{ padding: '50px', marginBottom: '45px' }}>
        <h2>Login</h2>
        <form onSubmit={SendLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '20px', background: '#F8DC88', border: '2px solid white', textAlign: 'center' }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '20px', background: '#F8DC88', border: '2px solid white', textAlign: 'center' }}
          />

          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: 'rgb(181, 73, 19)',
              color: 'white',
              border: 'none'
            }}>
            <b>Login</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
