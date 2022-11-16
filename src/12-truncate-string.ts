export {};
function truncateString(word: string, index: number) {
  return word.slice(0, index);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
