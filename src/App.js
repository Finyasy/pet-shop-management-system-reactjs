import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import Header from "./Components/Header";

const App = () => (
  <Router>
    <Header />
    <Routes>
      {/* <Route path="/" element={<Homepage />} /> */}
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
    </Routes>
  </Router>
);

export default App;
