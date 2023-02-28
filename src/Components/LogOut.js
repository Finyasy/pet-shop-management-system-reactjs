import { useNavigate } from "react-router-dom";
import React from "react";


const LogOut = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Clear local storage and redirect to login page
    localStorage.clear();
    navigate("/login");
  };

  return (
    <button onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default LogOut;
