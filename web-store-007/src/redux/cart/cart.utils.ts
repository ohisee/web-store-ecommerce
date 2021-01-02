/**
 * @fileoverview cart utility function 
 */

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number,
}

export function addItemToCart(cartItems: Item[], cartItemToAdd: Item): Item[] {
  let existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(item => (
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 } : item
    ));
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
