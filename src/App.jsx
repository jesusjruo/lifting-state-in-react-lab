import React, { useState } from 'react';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';
import './App.css';

const App = () => {
  
  const [stack, setStack] = useState([]);

 
  const availableIngredients = [
    { name: 'Lettuce', color: 'green' },
    { name: 'Tomato', color: 'maroon' },
    { name: 'Cheese', color: 'orange' },
    { name: 'Patty', color: 'brown' },
    { name: 'Bacon', color: 'Pink' },
    { name: 'Onion', color: 'white' },
    { name: 'Pickle', color: 'lime' },
    { name: 'Ketchup', color: 'red' },
    { name: 'Mustard', color: 'yellow' },
    { name: 'Bun', color: 'tan' },
 
  ];


  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  
  const removeFromBurger = (index) => {
    const newStack = stack.filter((_, i) => i !== index);
    setStack(newStack);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section style={{display: 'flex'}}>
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
