import * as dateTime from './modules/DateTime.js';
import { ListPage, AddPage, ContactPage } from './modules/displayPages.js';
import BookList from './modules/class.js';

const date = document.getElementById('dateTime');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');

date.innerHTML = `${dateTime.date} ${dateTime.hour}:${dateTime.min}:${dateTime.sec}`;

ListPage();
ContactPage();
AddPage();

const myBookList = new BookList();
myBookList.displayBookList();
myBookList.removeList();
document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  myBookList.addBook(inputTitle.value, inputAuthor.value);
  myBookList.displayBookList();
  myBookList.removeList();
});
