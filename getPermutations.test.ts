import getPermutations from "./getPermutations";
import factorialize from "./factorialize";

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
  it("generates correct permutations from first array", () => {
    const permutations = getPermutations(firstArray);
    expect(permutations).toContainEqual([1, 2, 3]);
    expect(permutations).toContainEqual([2, 1, 3]);
    expect(permutations).toContainEqual([3, 1, 2]);
    expect(permutations).toContainEqual([1, 3, 2]);
    expect(permutations).toContainEqual([2, 3, 1]);
    expect(permutations).toContainEqual([3, 2, 1]);
  });
  it("generates at least some correct permutations from second array", () => {
    const permutations = getPermutations(secondArray);
    expect(permutations).toContainEqual([1, 2, 3, 4, 5]);
    expect(permutations).toContainEqual([2, 1, 3, 4, 5]);
    expect(permutations).toContainEqual([3, 1, 2, 4, 5]);
    expect(permutations).toContainEqual([1, 3, 2, 4, 5]);
    expect(permutations).toContainEqual([2, 3, 1, 4, 5]);
    expect(permutations).toContainEqual([3, 2, 1, 4, 5]);
  });
});
