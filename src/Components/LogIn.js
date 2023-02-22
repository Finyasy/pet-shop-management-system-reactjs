import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from '../api/axios'
import cat from "../images/cat.png"

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Send the form data to the server for log in
    axios.post('/auth/login', formData)
      .then((response) => {
        setAuthenticated(true);
        localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem('name', JSON.stringify(response.data.name))
        localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
        localStorage.setItem('authenticated', JSON.stringify(true))        
      }).catch(error => {
        // Handle error
        setErrors(error.response.data.error);
    });      
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <img src={cat} alt="pet" style={{ width: "50%",height: "auto", marginRight: "2rem", marginTop: "auto", marginBottom: "auto" }} />
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      {errors && <p style={{color: "red"}}>{errors}</p>}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="✉️ Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="🔓 Password"
        required
      />
      <button type="submit">Log In</button>
      {authenticated && <p style={{color: "green"}}>Successfully logged in!</p>}
      <p>
          {" "}
          Don't have an account?{" "}
          <Link to="/signup">
            Sign Up
          </Link>  
        </p>
    </form>
    </div>
  );
};

export default LogIn;
