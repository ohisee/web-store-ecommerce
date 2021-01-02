/**
 * @fileoverview use React context to update cart icon view 
 */
import React, { useContext } from 'react';

// import CartContext from "../../contexts/cart/cart.context";

import { CartContext } from "../../providers/cart/cart.provider";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  );
}

export default CartIcon;
