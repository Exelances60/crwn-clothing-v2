import { screen, fireEvent } from "@testing-library/react";
import ProductCard from "../product-card.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("ProductCard", () => {
  test("it should add the product item when Product Cart button is clicked", async () => {
    const mockProduct = {
      id: 1,
      name: "Item A",
      price: 10,
      imageUrl: "test",
    };
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );
    const addToButtonElement = screen.getByText(/add to card/i);
    await fireEvent.click(addToButtonElement);
    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
