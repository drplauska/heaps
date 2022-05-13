import factorialize from "./factorialize";

describe("factorialize", () => {
  it("works correctly with positive numbers", () => {
    expect(factorialize(1)).toBe(1);
    expect(factorialize(3)).toBe(6);
    expect(factorialize(6)).toBe(720);
    expect(factorialize(9)).toBe(362880);
  });
  it("works correctly with a zero", () => {
    expect(factorialize(0)).toBe(1);
  });
  it("works correctly with negative numbers", () => {
    expect(factorialize(-1)).toBe(-1);
    expect(factorialize(-3)).toBe(-6);
    expect(factorialize(-6)).toBe(-720);
    expect(factorialize(-9)).toBe(-362880);
  });
});
