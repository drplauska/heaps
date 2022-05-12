import { PermutationItem } from "./types";

const getPermutations = (arr: PermutationItem[]) => {
  const output: PermutationItem[][] = [];

  const swapInPlace = (
    arrToSwap: PermutationItem[],
    indexA: number,
    indexB: number
  ) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (arrayLength: number, heapArr: PermutationItem[]) => {
    if (arrayLength === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(arrayLength - 1, heapArr);

    for (let i = 0; i < arrayLength - 1; i++) {
      if (arrayLength % 2 === 0) {
        swapInPlace(heapArr, i, arrayLength - 1);
      } else {
        swapInPlace(heapArr, 0, arrayLength - 1);
      }

      generate(arrayLength - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
};

export default getPermutations;
