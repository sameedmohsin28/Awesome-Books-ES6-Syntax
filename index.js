import {
  booksObjectArray, gettingBooksFromLocal, allBooks, BookClass,
} from './modules/bookclass.js';
import {
  addBtn, addBook,
} from './modules/addBook.js';
import {
  listSection, addNewSection, contactSection, showPage,
} from './modules/showPage.js';
// eslint-disable-next-line no-unused-vars
import removeBook from './modules/removeBook.js';
import DateTime from './node_modules/luxon/src/datetime.js';

if (gettingBooksFromLocal !== null) {
  gettingBooksFromLocal.forEach((element) => {
    allBooks.innerHTML += `
    <div class="particular-book" id="${element.id}">
      <p class="book-title-and-author">"${element.bookName}" by ${element.bookAuthor}</p>
      <button class="remove-book" onclick="removeBook(${element.id})">Remove</button>
    </div>
    `;
    const singleBook = new BookClass(element.id, element.bookName, element.bookAuthor);
    booksObjectArray.push(singleBook);
  });
}
if (booksObjectArray.length === 0) {
  allBooks.innerHTML = `
  <div class="no-books-message"> No books to show. Please add books to the list. </div>
  `;
}

addBtn.addEventListener('click', addBook);

const listNav = document.querySelector('.nav-list');
const addNewNav = document.querySelector('.nav-add-new');
const contactNav = document.querySelector('.nav-contact');

listNav.addEventListener('click', () => {
  showPage(listSection);
});
addNewNav.addEventListener('click', () => {
  showPage(addNewSection);
});
contactNav.addEventListener('click', () => {
  showPage(contactSection);
});

const dateOnPage = document.querySelector('.date');
const now = DateTime.now();
dateOnPage.innerHTML = now;