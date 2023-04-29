/* eslint-disable indent */
const myLibrary = [];
function book(name, author) {
  this.name = name;
  this.author = author;
}
let newBook;
function addBookToLibrary() {
  newBook = new book(prompt("enter name"), prompt("enter author name"));
  myLibrary.push(newBook);
  console.log(myLibrary);
}
