/* eslint-disable indent */
const body = document.querySelector("body");
//const init= new Book("shivuduu","shiva",55,"true")
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
    const bookAllDiv = document.getElementById("book-list");
   bookAllDiv.innerHTML='';

   myLibrary.forEach((book,index)=>{
   const bookDiv=document.createElement('div');
   bookDiv.classList.add('book-card');

   bookDiv.innerHTML=`
   <h2>${book.title}</h2>
   <p>Author:${book.author}</p>
   <p>pages:${book.pages}</p>
   <p>status:${book.read ? 'Read':'Not Read'}</p>
   <button class='remove-book-btn' data-index='${index}'>remove book</button>
   `
   
   bookAllDiv.appendChild(bookDiv);
   });
}

document.getElementById("new-book-btn").addEventListener('click',
()=>{document.getElementById("new-book-form").style.display='block'})

document.getElementById('add-book-btn').addEventListener('click',()=>
{
  const title  = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages  = document.getElementById('pages').value;
  const read   = document.getElementById('read').checked;
  const newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks();
  document.getElementById('new-book-form').style.display='none';
  document.getElementById('title').value='';
  document.getElementById('author').value='';
  document.getElementById('pages').value='';
  document.getElementById('read').checked=false;

})
document.addEventListener('click',(e)=>
{
  if(e.target.classList.contains('remove-book-btn')){
  const index= e.target.getAttribute('data-index')
  myLibrary.splice(index,1);
  displayBooks();
  }
}
)