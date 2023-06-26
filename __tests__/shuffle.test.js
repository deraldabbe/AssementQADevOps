const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(Array.isArray(shuffledArray)).toBe(true);
  });

  test("return an array of the same length as the input", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(shuffledArray.length).toBe(array.length);
  });

  test("contain the same items as the input array", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toEqual(expect.arrayContaining(array));
  });

  test("have shuffled items", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).not.toEqual(array);
  });
});
