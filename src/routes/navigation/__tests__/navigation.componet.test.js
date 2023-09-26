import { screen, fireEvent } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { renderWithProviders } from "../../../utils/test/test.utils";
import Navigation from "../navigation.component";
import { signOutStart } from "../../../store/user/user.action";

describe("Navigation component", () => {
  test("It should render a Sing in Link and a Sign Out Link if there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });
    const signOutLink = screen.queryByText(/sign out/i);
    expect(signOutLink).toBeNull();

    const signInLink = screen.getByText(/sign in/i);
    expect(signInLink).toBeInTheDocument();
  });
  test("It should render a Sign out and not Sign in  if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    const signInLink = screen.queryByText(/sign in/i);
    expect(signInLink).toBeNull();

    const signOutLink = screen.getByText(/sign out/i);
    expect(signOutLink).toBeInTheDocument();
  });
  test("it should  render a cart dropdown isCartOpen true", async () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const cartDropdown = screen.getByText(/Your cart is empty/i);
    expect(cartDropdown).toBeInTheDocument();

    const buttonElement = screen.getByText(/go to checkout/i);
    expect(buttonElement).toHaveStyle("background-color: black");
  });
  test("it should not render a cart dropdown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(dropdownTextElement).toBeNull();
  });
  test("Cart dropdown should renderd with items", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [
            {
              id: 1,
              name: "test",
              imageUrl: "test",
              price: 1,
              quantity: 1,
            },
          ],
        },
      },
    });

    const cartDropdownElement = screen.getByText(/test/i);
    expect(cartDropdownElement).toBeInTheDocument();
  });
  test("it should dispatch signOut action when signOut link is clicked", async () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch);
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });
    const signOutElement = screen.getByText(/sign out/i);
    expect(signOutElement).toBeInTheDocument();

    await fireEvent.click(signOutElement);
    expect(mockDispatch).toHaveBeenCalled();
    const signOutAction = signOutStart();
    expect(mockDispatch).toHaveBeenCalledWith(signOutAction);

    mockDispatch.mockClear();
  });
});
