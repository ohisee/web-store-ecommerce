/**
 * @fileoverview cart context 
 */
import { createContext } from "react";

/**
 * @typedef {object} CartContextType
 * @property {boolean} hidden
 * @property {() => void} toggleHidden
 */

/** @type {React.Context<CartContextType>} */
const CartContext = createContext({
  hidden: true,
  toggleHidden: () => { }
});

export default CartContext;
