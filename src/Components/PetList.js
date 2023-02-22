import React, {useState, useEffect} from 'react';
import Pet from './Pet'
import axios from '../api/axios'

const PetList = () => {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("/pets")
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pets.map((pet) => (
          <Pet key={pet.id} {...pet} />
        ))}
      </div>
    );
  };

export default PetList