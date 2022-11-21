export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false,
  },
];

const showStatus = (
  library: { title: string; author: string; isRead: boolean }[]
) => {
  library.forEach((book) => {
    const { title, author, isRead } = book;
    if (isRead) {
      console.log(`Already read ${title} by ${author}.`);
    } else {
      console.log(`You still need to read ${title} by ${author}.`);
    }
  });
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
