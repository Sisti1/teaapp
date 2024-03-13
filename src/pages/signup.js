
	import React, { useState } from 'react';
	import "./sigup.css";
	const SignUp = () => {
	  const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
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
		if (!formData.firstName) {
		  errors.firstName = 'First name is required';
		}
		if (!formData.lastName) {
		  errors.lastName = 'Last name is required';
		}
		if (!formData.email) {

		  errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
		  errors.email = 'Email is invalid';
		}
		if (!formData.password) {
		  errors.password = 'Password is required';
		} else if (formData.password.length < 6) {
		  errors.password = 'Password must be at least 6 characters long';
		}
	
		if (Object.keys(errors).length === 0) {
		  // Submit the form
		  console.log('Form submitted:', formData);
		} else {
		  setErrors(errors);
		}
	  };
	
	  return (
		<div style={{ maxWidth: '450px', margin: 'auto', padding: '20px' }}>
			 <div style={{ padding: '20px', marginBottom: '20px'}}>
		  <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
		  <form onSubmit={handleSubmit}>
			<div>
			  <input
				type="text"
				name="firstName"
				placeholder="First Name"
				value={formData.firstName}
				onChange={handleChange}
				className="input-field"
				style={{ width: '100%', marginBottom: '20px',background:'#F8DC88' ,border:'2px solid white',}}
			  />
			  {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
			</div>
			<div>
			  <input
				type="text"
				name="lastName"
				placeholder="Last Name"
				value={formData.lastName}
				onChange={handleChange}
				className="input-field"
				style={{ width: '100%', marginBottom: '20px',background:'#F8DC88' ,border:'2px solid white' }}
			  />
			  {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
			</div>
			<div>
			  <input
				type="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
				className="input-field"
				style={{ width: '100%', marginBottom: '20px',background:'#F8DC88' ,border:'2px solid white' }}
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
				style={{ width: '100%', marginBottom: '20px' ,background:'#F8DC88' ,border:'2px solid white'}}
			  />
			  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
			</div>
			<button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: ' rgb(181, 73, 19)', color: 'white', border: '2px solid white' }}><b>Sign Up</b></button>
		  </form>
		</div>
		</div>
	  );
	};
	
	export default SignUp;