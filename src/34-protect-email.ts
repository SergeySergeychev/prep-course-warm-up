export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email: string) {
  const match = email.match(/(^[\d\w]+[^@])(@[\d\w]+\.[\d\w]+)/);
  let username = "";
  let domain = "";
  let result = "";
  let dots = "...";
  if (match !== null) {
    username = match[1];
    domain = match[2];
  } else {
    return "Please check Your e-mail address.";
  }

  if (username.length > 1 && username.length < 5) {
    result = dots + domain;
  }

  if (username.length === 5) {
    result = username.slice(0, 2) + dots + domain;
  }

  if (username.length > 5) {
    result = username.slice(0, 3) + dots + domain;
  }
  return result;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail("12345@example.com")); // Expected result: 12...@example.com
console.log(protectEmail("12@example.com")); // Expected result: ...@example.com
