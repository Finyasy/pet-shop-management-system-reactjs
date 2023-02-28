import React, {useState, useEffect} from 'react';
import Pet from './Pet'
import axios from '../api/axios'

const PetList = () => {

  const [pets, setPets] = useState([]);
  const [cart, setCart] = useState([]);

  const cartItem = (pet) => {
    setCart((prevCart) => [...prevCart, pet]);
  };

  const removeCartItem = (index) => {
    setCart((prevCart) => prevCart.filter((_pet, i) => i !== index));
  };


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
      <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pets.map((pet) => (
          <Pet key={pet.id} {...pet} cartItem={() => cartItem(pet)} />
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        {cart.map((pet, index) => (
          <div key={index}>
            <span>{pet.name}</span>
            <button onClick={() => removeCartItem(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
  };

export default PetList;