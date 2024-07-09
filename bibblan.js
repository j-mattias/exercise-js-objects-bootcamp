let book1 = {
  title: "Shards of Earth",
  author: "Adrian Tchaikovsky",
  numPages: 558,
};

let book2 = {
  title: "Reckless",
  author: "Lauren Roberts",
  numPages: 400,
};

let book3 = {
    title: "Daughter of Fire",
    author: "Sofia Robleda",
    numPages: 280,
}

let bookCollection = [book1, book2, book3];

console.log(findBook(bookCollection, "Daughter of Fire"));
console.log(findBook(bookCollection, "Game of Thrones"));

// Using find, less code and easier to read
function findBook(books, title) {
    const book = books.find(book => book.title === title);
    return (book) ? book : null;
}

// Iterating over books array and checking current objects title against input
// function findBook(books, title) {
//     for (const book of books) {
//         if (book.title === title) {
//             return book;
//         }
//     }
//     return null;
// }

// The longer way iterating over books and then iterating over properties in that book object
// function findBook(books, title) {
//     for (const book of books) {
//         for (const prop in book) {
//             if (book[prop] === title) {
//                 return book;
//             }
//         }
//     }
//     return null;
// }