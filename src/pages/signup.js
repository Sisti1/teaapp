
	import React, { useState } from 'react';
	import "./sigup.css";
	const SignUp = () => {
	  const [formData, setFormData] = useState({
		fullname:'',
		email: '',
		password: '',
	  });

	  async function SendSignUp() {
		console.log(formData);
		try {
		  const response = await fetch('http://localhost:5200/user/signup', {
			method: 'POST',
			headers: {
			  "Content-Type": "application/json",
			},
			mode: 'cors',
			body: JSON.stringify({
			username:formData.fullname,
			  email: formData.email,
			  password: formData.password
			})
		  });
		
		console.log(response.status);
        console.log(response);
		if (response.ok) {
			console.log("Data Submitted ");
			alert('New user added!');
		  } else {
			console.error('Failed to send data:', response.status);
			alert('Enter correct fields. Please try again .');
		  }
		} catch (error) {
		  console.error('Error sending data:', error);
		  alert('Enter correct fields. Please try again .');
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
		if (!formData.fullname) {
		  errors.fullname = 'fullname is required';
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
		  <form onSubmit={SendSignUp}>
			<div>
			  <input
				type="text"
				name="fullname"
				placeholder="Full Name"
				value={formData.fullname}
				onChange={handleChange}
				className="input-field"
				style={{ width: '100%', marginBottom: '20px',background:'#F8DC88' ,border:'2px solid white',}}
			  />
			  {errors.fullname && <p style={{ color: 'red' }}>{errors.firstName}</p>}
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