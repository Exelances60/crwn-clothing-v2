import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from "../category.reducer";

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../category.action";

describe("categoriesReducer", () => {
  test("fetchCategoriesStart", () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };
    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())
    ).toEqual(expectedState);
  });
  test("fetchCategoriesSuccess", () => {
    const mockData = [
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
        items: [
          {
            id: 1,
            name: "Camo Down Vest",
            imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
            price: 325,
          },
        ],
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        items: [
          {
            id: 1,
            name: "Blue Tanktop",
            imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
            price: 25,
          },
        ],
      },
    ];
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      categories: mockData,
    };
    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesSuccess(mockData)
      )
    ).toEqual(expectedState);
  });
  test("fetchCategoriesFailed", () => {
    const mockError = new Error("Error fetching categories");
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      error: mockError,
    };
    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesFailed(mockError)
      )
    ).toEqual(expectedState);
  });
});
