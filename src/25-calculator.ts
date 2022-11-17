export {};

function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

function sum(arr: number[]) {
  return arr.reduce((a, b) => a + b);
}

function multiply(arr: number[]) {
  return arr.reduce((a, b) => a * b);
}

function power(base: number, power: number) {
  return Math.pow(base, power);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
