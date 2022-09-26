import library from './library.js';
import drawOnScreen from './drow-on-screen.js';

export default function localStorageOnLoad() {
  window.addEventListener('load', () => {
    const localStorageItem = window.localStorage.getItem('books');
    if (localStorageItem) {
      library.booksArr = JSON.parse(localStorageItem);
      library.booksArr.forEach((element) => {
        drawOnScreen(element);
      });
    }
  });
}