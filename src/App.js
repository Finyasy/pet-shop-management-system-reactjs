import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import Header from "./Components/Header";
import PetList from "./Components/PetList";
import Cart from "./Components/Cart";
import LogOut from "./Components/LogOut"; 

const App = ({pets}) => {
  const [filteredPets, setFilteredPets] = useState(pets);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return(
  <Router>
    <Header setFilteredPets={setFilteredPets} pets={pets} isLoggedIn={isLoggedIn} handleLogin={handleLogin}/>
    <Routes>
      <Route path="/" element={<PetList pets={filteredPets} />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn handleLogin={handleLogin}/>} />
      <Route path="pets" element={<PetList pets={filteredPets} />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/logout" element={<LogOut />} /> 
    </Routes>
  </Router>
);
};

export default App;
