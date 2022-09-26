/* eslint-disable max-classes-per-file */

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const bookinfo = document.getElementById('bookInfo');
let btnList = [];

class BookTemplate {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

export default class BookList {
  constructor() {
    this.bookArray = [];
  }

  addBook(title, author) {
    const bookAdded = new BookTemplate(title, author);
    this.bookArray.push(bookAdded);
    localStorage.setItem('BookLibrary', JSON.stringify(this.bookArray));
    inputTitle.value = '';
    inputAuthor.value = '';
    window.location.reload();
  }

  displayBookList() {
    if (localStorage.getItem('BookLibrary') !== null) {
      this.bookArray = JSON.parse(localStorage.getItem('BookLibrary'));
    }
    bookinfo.innerText = '';
    this.bookArray.forEach((item) => {
      const container = document.createElement('div');
      container.classList = 'dFlex container paddingStart';
      if (this.bookArray.indexOf(item) % 2 === 0) {
        container.classList.add('bgGray');
      }
      const p = document.createElement('p');
      const titleHtml = document.createElement('span');
      const by = document.createElement('span');
      by.innerText = ' by ';
      const authorHtml = document.createElement('span');
      const remove = document.createElement('button');
      remove.classList = 'button';
      titleHtml.innerText = item.title;
      authorHtml.innerText = item.author;
      remove.innerText = 'Remove!';
      p.append(titleHtml, by, authorHtml);
      container.append(p, remove);
      bookinfo.append(container);
    });
    btnList = Array.from(document.querySelectorAll('button'));
  }

  removeList() {
    btnList.forEach((item) => {
      item.addEventListener('click', () => {
        this.bookArray.splice(btnList.indexOf(item), 1);
        localStorage.setItem('BookLibrary', JSON.stringify(this.bookArray));
        this.displayBookList();
        window.location.reload();
      });
    });
  }
}
