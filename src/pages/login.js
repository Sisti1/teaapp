import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  async function SendLogin() {
		console.log(formData);
		try {
		  const response = await fetch('http://localhost:5200/user/login', {
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
		
		console.log(response.status);
        console.log(response);
		if (response.ok) {
			console.log("Data Submitted ");
			alert('login successfull!');
		  } else {
			console.error('Failed to send data:', response.status);
      alert('Failed to login. Please try again .');
		  }
		} catch (error) {
		  console.error('Error sending data:', error);
      alert('Error ! Please try again.');
		}
	  }


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
		console.log(e.target+"THIS I SEEEEEEE")
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		  }));
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
    <div style={{ padding: '50px', marginBottom: '45px'}}>
      <h2>Login</h2>
      <form onSubmit={SendLogin}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '20px' ,background:'#F8DC88' ,border:'2px solid white' ,textAlign:
            'center'}}
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
            style={{ width: '100%', marginBottom: '20px',background:'#F8DC88' ,border:'2px solid white',textAlign:
        'center' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(181, 73, 19)', color: 'white', border: 'none' }}><b>Login</b></button>
      </form>
    </div>
    </div>
  );
};

export default Login;
