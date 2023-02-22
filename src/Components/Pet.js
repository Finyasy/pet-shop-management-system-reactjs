import React from 'react';

const Pet = ({ name, dob, sex, breed, color, image, price}) => {
  
  return (
    <div style={{ display: 'inline-block', width: '20%', textAlign: 'center', margin: '5px'}}>
      <img src={image} alt={name} style={{ width: '60%', height: '200px' }} />
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