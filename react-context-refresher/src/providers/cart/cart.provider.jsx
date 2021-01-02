/**
 * @fileoverview cart provider using React context 
 */
import React, { createContext, useState, useEffect } from "react";
import {
  addItemToCart,
  computeTotalPrice,
  filterItemFromCart,
  getCartItemsCount,
  removeItemFromCart,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => { },
  cartItems: [],
  addItem: () => { },
  removeItem: () => { },
  clearItemFromCart: () => { },
  cartItemsCount: 0,
  total: 0,
});

/** @type {React.FC} */
const CartProvider = ({ children }) => {

  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  function toggleHidden() {
    setHidden(!hidden);
  }

  function addItem(item) {
    setCartItems(addItemToCart(cartItems, item));
  }

  function removeItem(item) {
    setCartItems(removeItemFromCart(cartItems, item));
  }

  function clearItemFromCart(item) {
    setCartItems(filterItemFromCart(cartItems, item));
  }

  useEffect(() => {
    setTotal(computeTotalPrice(cartItems));
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems] /* anytime cartItems change, trigger this effect to update total and cart items count */);

  return (
    <CartContext.Provider value={{
      hidden,
      toggleHidden,
      cartItems,
      addItem,
      removeItem,
      cartItemsCount,
      total,
      clearItemFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
