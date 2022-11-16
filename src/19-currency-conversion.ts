export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function
function convertCurrency(
  amount: number,
  currency: "$" | "R$",
  fee: 0.01 = 0.01
) {
  const exchRate = currency === "$" ? 1.4 : 6.43;
  const commision = fee * amount;
  return Number((exchRate * amount - commision).toFixed(2));
}
const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertCurrency(price, "$");
const priceInBRL = convertCurrency(price, "R$");

console.log("Product: " + product);
console.log("Price: $ " + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
