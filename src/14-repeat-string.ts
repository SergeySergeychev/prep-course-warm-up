export {};

const repeatString = (arg: string, times: number) => {
  return arg.repeat(times);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
