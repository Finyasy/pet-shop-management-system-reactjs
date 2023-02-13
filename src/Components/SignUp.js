import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from '../api/axios'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Send the form data to the server for sign up
    axios.post('/users', formData)
    .then((response) => {
      setAuthenticated(true);
      localStorage.setItem('token', JSON.stringify(response.data.token))
      localStorage.setItem('username', JSON.stringify(response.data.username))
      localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
    }).catch((error) => {
      if( error.response ){
          console.log(error.response.data); 
          setErrors(error.response.data);
      }
  });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
    {
    authenticated ? (
    <p>Sign up successful!</p>
    ) : (
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />
      <button type="submit">Sign Up</button>
      {
      errors.length > 0 ? (
      <p style={{marginTop: "1rem", color: "red"}}>
        {errors.map(error => <li key={error}>{error}</li>)}
      </p>
        ) : null
        }
      <p style={{marginTop: "1rem", textAlign: "center"}}>
     Already have an account? <Link to="/login">Log in</Link>
    </p>
    </form>
    )
    }
    </div>
  );
};

export default SignUp;
