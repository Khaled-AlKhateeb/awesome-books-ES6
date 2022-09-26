import library from './library.js';
import drawOnScreen from './drow-on-screen.js';

const localStorageOnLoad = () => {
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

export default localStorageOnLoad;