const booksObjectArray = [];
const gettingBooksFromLocal = JSON.parse(localStorage.getItem('localStorageBooks'));
const allBooks = document.querySelector('.all-books-container');

class BookClass {
  constructor(id, bookTitle, author) {
    this.id = id;
    this.bookName = bookTitle;
    this.bookAuthor = author;
  }
}

export {
  booksObjectArray, gettingBooksFromLocal, allBooks, BookClass,
};