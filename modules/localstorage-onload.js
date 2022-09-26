import { BookLibrary } from './library.js';
import drawOnScreen from './drow-on-screen.js';

export default window.addEventListener('load', () => {
  const library = new BookLibrary();
  const localStorageItem = window.localStorage.getItem('books');
  if (localStorageItem) {
    library.booksArr = JSON.parse(localStorageItem);
    library.booksArr.forEach((element) => {
      drawOnScreen(element);
    });
  }
});