export {};

const letters = ["a", "n", "c", "e", "z", "f"];
const sortedLetters: string[] = letters.sort(
  (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
); // You are allowed to change only this line

console.log(sortedLetters); // Expected output: [ 'a', 'c', 'e', 'f', 'n', 'z' ]
