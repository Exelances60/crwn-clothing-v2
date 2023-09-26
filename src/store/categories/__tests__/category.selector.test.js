import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../category.selector";

const mockState = {
  categories: {
    isLoading: false,
    categories: [
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
    ],
  },
};

describe("selectCategories", () => {
  test("selectCategories should return the categoriesData", () => {
    const categoriesSlice = mockState;
    expect(selectCategories(categoriesSlice)).toEqual(
      mockState.categories.categories
    );
  });
  test("selectCategoriesIsLoading should return the isLoading", () => {
    const categoriesSlice = mockState;
    expect(selectCategoriesIsLoading(categoriesSlice)).toEqual(
      mockState.categories.isLoading
    );
  });
  test("selectCategoriesMap should return the categoriesMap", () => {
    const expectCategoriesMap = {
      mens: [
        {
          id: 1,
          name: "Camo Down Vest",
          imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
          price: 325,
        },
      ],
      womens: [
        {
          id: 1,
          name: "Blue Tanktop",
          imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
          price: 25,
        },
      ],
    };
    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectCategoriesMap);
  });
});
