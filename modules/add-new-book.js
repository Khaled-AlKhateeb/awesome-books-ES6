import { library } from './library.js';
import drawOnScreen from './drow-on-screen.js';

function getInputValues() {
  const bookEntries = {
    title: null,
    author: null,
  };

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  bookEntries.title = titleInput.value;
  bookEntries.author = authorInput.value;

  library.add(bookEntries);

  titleInput.value = '';
  authorInput.value = '';

  window.localStorage.setItem('books', JSON.stringify(library.booksArr));

  drawOnScreen(bookEntries);
}

export default getInputValues