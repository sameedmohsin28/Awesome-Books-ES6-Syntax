import {
  BookClass, booksObjectArray,
} from './bookclass.js';

const inputBook = document.querySelector('.input-book-name');
const inputAuthor = document.querySelector('.input-book-author');
const addBtn = document.querySelector('.add-button');

const addBook = () => {
  const singleBook = new BookClass(booksObjectArray.length, inputBook.value, inputAuthor.value);
  booksObjectArray.push(singleBook);
  localStorage.setItem('localStorageBooks', JSON.stringify(booksObjectArray));
};

export {
  inputBook, inputAuthor, addBtn, addBook,
};