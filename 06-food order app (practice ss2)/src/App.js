import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Header/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealSumary from "./Components/Meals/MealSumary";
import Modal from "./Components/UI/Modal";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  function showCart() {
    setCartIsShown(true)
  }

  function closeCart() {
    setCartIsShown(false)
  }

  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Cum Sandwich',
      description: 'Great for breakfast',
      price: 10,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm4',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm5',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={closeCart} />}
      <Header onShow={showCart} />
      <MealSumary />
      <AvailableMeals meals={DUMMY_MEALS}></AvailableMeals>
    </CartContextProvider>
  );
}

export default App;
