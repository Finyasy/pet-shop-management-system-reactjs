import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import Header from "./Components/Header";
import PetList from "./Components/PetList";


const pets = [
  {
    id: 1,
    name: 'Max',
    dob: '01/01/2020',
    sex: 'Male',
    breed: 'German Shepherd',
    color: 'Brown',
    image: 'max.jpeg',
    price: 1500
  },
  {
    id: 2,
    name: 'Bella',
    dob: '02/02/2019',
    sex: 'Female',
    breed: 'Golden Retriever',
    color: 'Yellow',
    image: 'bella.jpeg',
    price: 1000
  },
  {
    id: 3,
    name: 'Charlie',
    dob: '03/03/2018',
    sex: 'Male',
    breed: 'Labrador Retriever',
    color: 'Black',
    image: 'charlie.jpeg',
    price: 1200
  },
  {
    id: 4,
    name: 'Daisy',
    dob: '04/04/2017',
    sex: 'Female',
    breed: 'Poodle',
    color: 'White',
    image: 'daisy.jpg',
    price: 2000
  }
];

const App = () => (

    
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
