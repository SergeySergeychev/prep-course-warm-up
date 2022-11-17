export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(rows: number) {
  let output = "";
  for (let lvl = 0, el = "*"; lvl < rows; lvl++, el += "*") {
    output += el + "\n";
  }
  console.log(output);
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
