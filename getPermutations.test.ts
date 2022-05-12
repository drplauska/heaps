import { getPermutations } from "./getPermutations";
import { factorialize } from "./factorialize";

describe("getPermutations", () => {
  const firstArray = [1, 2, 3];
  const secondArray = [1, 2, 3, 4, 5];
  const thirdArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  it("returns correct length of result", () => {
    expect(getPermutations(firstArray).length).toBe(
      factorialize(firstArray.length)
    );
    expect(getPermutations(secondArray).length).toBe(
      factorialize(secondArray.length)
    );
    expect(getPermutations(thirdArray).length).toBe(
      factorialize(thirdArray.length)
    );
  });
});
