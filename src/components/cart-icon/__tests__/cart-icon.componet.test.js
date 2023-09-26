import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("CartIcon component", () => {
  test("Uses preloaded state to render", () => {
    const initialCartItems = [
      {
        id: 1,
        name: "Test Item",
        price: 100,
        quantity: 1,
        imageUrl: "test-image.jpg",
      },
      {
        id: 2,
        name: "Test Item 2",
        price: 200,
        quantity: 2,
        imageUrl: "test-image-2.jpg",
      },
    ];
    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });
    const cartIconElment = screen.getByText(/3/i);
    expect(cartIconElment).toBeInTheDocument();
  });
});
