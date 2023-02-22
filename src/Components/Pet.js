import React from 'react';
import max from '../images/max.jpeg';
import bella from '../images/bella.jpeg';
import charlie from '../images/charlie.jpeg';
import daisy from '../images/daisy.jpg';

const Pet = ({ name, dob, sex, breed, color, image, price}) => {

  let img;
  switch (name) {
    case 'Max':
      img = max;
      break;
    case 'Bella':
      img = bella;
      break;
    case 'Charlie':
      img = charlie;
      break;
    case 'Daisy':
      img = daisy;
      break;
    default:
      img = max;
  }
  
  return (
    <div style={{ display: 'inline-block', width: '20%', textAlign: 'center', margin: '5px'}}>
      <img src={img} alt={name} style={{ width: '60%', height: '200px' }} />
      {/* <img src={require(`../images/${image}`).default} alt={name} style={{ width: '100%' }} /> */}
      <h3>{name}</h3>
      <p>Date of Birth: {dob}</p>
      <p>Sex: {sex}</p>
      <p>Breed: {breed}</p>
      <p>Color: {color}</p>
      <p>Price: {price}</p>
    </div>
  );
};


export default Pet