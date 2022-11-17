export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

const min = (array: number[]) => {
  return array.reduce(
    (prevNum, curNum) => (curNum < prevNum ? curNum : prevNum),

    +Infinity
  );
};

const max = (array: number[]) => {
  return array.reduce(
    (prevNum, curNum) => (curNum > prevNum ? curNum : prevNum),

    -Infinity
  );
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
