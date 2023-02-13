import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Send the form data to the server for log in
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
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
      <button type="submit">Log In</button>
      <p>
          {" "}
          Don't have an account?{" "}
          <Link to="/signup">
            <a href="/signup">
            Sign Up
            </a>                    
          </Link>  
        </p>
    </form>
    </div>
  );
};

export default LogIn;
