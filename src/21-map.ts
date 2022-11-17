export {};

function tidyUpString(str: string) {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(name: string) {
  return name[0].toUpperCase() + name.slice(1);
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
const mentorsTidy: string[] = mentors
  .map((name) => tidyUpString(name))
  .map((name) => capitalise(name)); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
