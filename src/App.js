import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import Header from "./Components/Header";
import PetList from "./Components/PetList";


const App = ({pets}) => (
    
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<PetList pets={pets} />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="pets" element={<PetList pets={pets} />} />
    </Routes>
  </Router>
);

export default App;
