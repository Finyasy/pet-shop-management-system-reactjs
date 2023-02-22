import React from 'react';
import Pet from './Pet'

const PetList = ({ pets }) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pets.map((pet) => (
          <Pet key={pet.id} {...pet} />
        ))}
      </div>
    );
  };

export default PetList