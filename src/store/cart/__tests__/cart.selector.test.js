import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  selectIsCartOpen,
} from "../cart.selector";
const mockData = {
  cart: {
    cartItems: [
      {
        id: 1,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
        quantity: 1,
      },
    ],
    isCartOpen: false,
  },
};

describe("selectCart", () => {
  test("selectCartItems should return the cartItems", () => {
    const cartSlice = mockData;
    expect(selectCartItems(cartSlice)).toEqual(mockData.cart.cartItems);
  });
  test("selectIsCartOpen should return the isCartOpen", () => {
    const cartIsOpen = mockData;
    expect(selectIsCartOpen(cartIsOpen)).toEqual(mockData.cart.isCartOpen);
  });
  test("selectCartCount should return the cartCount", () => {
    const cartCount = mockData;
    expect(selectCartCount(cartCount)).toEqual(1);
  });
  test("selectCartTotal should return the cartTotal", () => {
    const cartTotal = mockData;
    expect(selectCartTotal(cartTotal)).toEqual(25);
  });
});
