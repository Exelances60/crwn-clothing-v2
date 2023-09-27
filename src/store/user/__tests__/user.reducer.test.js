import { userReducer, INITIAL_STATE } from "../user.reducer";
import {
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signInFailed,
  signUpFailed,
} from "../user.action";

describe("userReducer", () => {
  test("fetchUserStart", () => {
    const mockData = {
      currentUser: {
        id: 1,
        displayName: "test",
        email: "test@gmail.com  ",
        createdAt: [],
      },
    };
    const expectedState = {
      ...INITIAL_STATE,
      currentUser: mockData,
    };

    expect(userReducer(INITIAL_STATE, signInSuccess(mockData))).toEqual(
      expectedState
    );
  });
  test("signOutSuccess", () => {
    const expectedState = {
      ...INITIAL_STATE,
      currentUser: null,
    };
    expect(userReducer(INITIAL_STATE, signOutSuccess(null))).toEqual(
      expectedState
    );
  });
  test("signOutFailed and  Sign in and sign up fail", () => {
    const mockData = {
      error: "error",
    };
    const expectedState = {
      ...INITIAL_STATE,
      error: mockData,
    };
    expect(userReducer(INITIAL_STATE, signOutFailed(mockData))).toEqual(
      expectedState
    );
    expect(userReducer(INITIAL_STATE, signInFailed(mockData))).toEqual(
      expectedState
    );
    expect(userReducer(INITIAL_STATE, signUpFailed(mockData))).toEqual(
      expectedState
    );
  });
});
