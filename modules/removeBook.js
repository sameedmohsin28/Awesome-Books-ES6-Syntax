import { booksObjectArray } from './bookclass.js';

export default window.removeBook = (bookId) => {
  const res = booksObjectArray.filter((every) => every.id !== bookId);
  for (let i = 0; i < res.length; i += 1) {
    res[i].id = i;
  }
  localStorage.setItem('localStorageBooks', JSON.stringify(res));
  window.location.reload();
};