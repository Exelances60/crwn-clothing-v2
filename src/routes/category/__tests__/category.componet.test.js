import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import Category from "../category.component";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

describe("Category component", () => {
  test("it shoudd render spinner isLoading is true", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });
  test("it should render Category isLoading is false", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: "Mens",
              imageUrl: "https://i.ibb.co/c8kCkR6/hats.png",
              items: [
                {
                  id: 1,
                  name: "Product 1",
                  imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                  price: 25,
                },
              ],
            },
          ],
        },
      },
    });
    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();

    const categoryElement = screen.getByText(/product 1/i);
    expect(categoryElement).toBeInTheDocument();
  });
});
