import { setCartItems, setIsCartOpen } from "./cart.action";
import { CartItem } from "./cart.types";
import { AnyAction } from "redux";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};
export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};
export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  return state;
  /* const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  } */
};
