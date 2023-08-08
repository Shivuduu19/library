/* eslint-disable indent */
const body = document.querySelector("body");
const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
function displayBooks() {
    const bookAllDiv = document.getElementById(book-list);
   bookAllDiv.innerHTML='';

   myLibrary.forEach((book)=>{
   const bookDiv=document.createElement('div');
   bookDiv.classList.add('book-card');

   bookDiv.innerHTML=`
   <h2>${book.title}</h2>
   <p>Author:${book.author}</p>
   <p>pages:${book.pages}</p>
   <p>status:${book.read}?'Read':'Not Read</p>`;
   bookAllDiv.appendChild(bookDiv);
   });
}
