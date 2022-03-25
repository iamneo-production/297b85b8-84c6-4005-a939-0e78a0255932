import { CartActionTypes } from './cart.types';

export const addItemToCart = cartItem => ({
  type: CartActionTypes.ADD_ITEM,
  payload: cartItem
});

export const addItemToOrder = cartItem => ({
  type: CartActionTypes.ADD_ORDER
});

export const removeItemFromCart = id => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id
});

export const toggleCartHidden = (bool = null) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: bool
});

export const removeItemAllFromCart = id => ({
  type: CartActionTypes.REMOVE_ITEM_ALL,
  payload: id
});

export const resetCart = () => ({
  type: CartActionTypes.RESET_CART
});

// export const reItem = (items) => ({
//   type:   CartActionTypes.RE_ITEM,
//   payload: items
// })
