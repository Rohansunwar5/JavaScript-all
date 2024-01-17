// const coding = ["js", "java", "python", "cpp", "ruby"];

//NOTE: For Each dosen't return any value
// const values = coding.forEach((item) => {
//   // console.log(`I can code in ${item}`);
//   return item;
// });

// console.log(values);

const mynums = [12, 3, 5, 632, 6, 324, 2];

//filter similar to foreach takes a arrow function inside and checks for the condition with each itreation and returns the value
// const newNums = mynums.filter((num) => {
//   if (num % 2 === 0) {
//     return num;
//   }
// });

const newNums = [];

mynums.forEach((num) => {
  if (num > 6) {
    newNums.push(num);
  }
});
// console.log(newNums);

const books = [
  { title: "All in one", genre: "Fiction", publish: 1981, edition: 2003 },
  {
    title: "The Lost World",
    genre: "Science Fiction",
    publish: 1995,
    edition: 2007,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Classics",
    publish: 1960,
    edition: 2008,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: 2001,
  },
  { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: 2012 },
  { title: "1984", genre: "Dystopian", publish: 1949, edition: 2003 },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813,
    edition: 2010,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-age",
    publish: 1951,
    edition: 2005,
  },
  {
    title: "The Great Gatsby",
    genre: "Classics",
    publish: 1925,
    edition: 1994,
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    publish: 2003,
    edition: 2006,
  },
  {
    title: "The Hunger Games",
    genre: "Dystopian",
    publish: 2008,
    edition: 2011,
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish: 1954,
    edition: 2001,
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    publish: 1932,
    edition: 2014,
  },
  { title: "The Shining", genre: "Horror", publish: 1977, edition: 2007 },
  { title: "Moby-Dick", genre: "Adventure", publish: 1851, edition: 2005 },
];

let userBooks = books.filter((book) => {
  return book.genre === "Adventure";
});

userBooks = books.filter((book) => {
  return book.publish >= 2000 && book.genre === "Dystopian";
});

console.log(userBooks);
