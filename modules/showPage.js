const listSection = document.querySelector('.books-list-page');
const addNewSection = document.querySelector('.add-book-container');
const contactSection = document.querySelector('.contacts-section');

const showPage = (pageName) => {
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
  pageName.style.display = 'flex';
};

export {
  listSection, addNewSection, contactSection, showPage,
};