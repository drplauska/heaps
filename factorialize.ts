export const factorialize = (num: number): number => {
  if (num == 0) {
    return 1;
  }
  return num * factorialize(Math.abs(num) - 1);
};
