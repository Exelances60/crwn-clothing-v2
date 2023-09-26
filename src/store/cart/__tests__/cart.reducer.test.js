import { CART_INITIAL_STATE, cartReducer } from "../cart.reducer";
import { setCartItems, setIsCartOpen } from "../cart.action";

describe("cartReducer", () => {
  test("setCartItems", () => {
    const mockData = [
      {
        id: 1,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
        quantity: 1,
      },
    ];
    const expectedState = {
      ...CART_INITIAL_STATE,
      cartItems: mockData,
    };
    expect(cartReducer(CART_INITIAL_STATE, setCartItems(mockData))).toEqual(
      expectedState
    );
  });
  test("setIsCartOpen", () => {
    const expectedState = {
      ...CART_INITIAL_STATE,
      isCartOpen: true,
    };
    expect(cartReducer(CART_INITIAL_STATE, setIsCartOpen(true))).toEqual(
      expectedState
    );
  });
  test("setIsCartOpen false", () => {
    const expectedState = {
      ...CART_INITIAL_STATE,
      isCartOpen: false,
    };
    expect(cartReducer(CART_INITIAL_STATE, setIsCartOpen(false))).toEqual(
      expectedState
    );
  });
});
