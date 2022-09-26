import getInputValues from './modules/add-new-book.js';
import { selectAdd, selectContact, selectList } from './modules/select-tab.js';
import removeBook from './modules/remove-book.js';
import * as localStorageOnLoad from './modules/localstorage-onload.js';
import { DateTime } from './modules/luxon.js';

const now = DateTime.now();
const clock = document.getElementById('clock-time');
clock.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);

window.getInputValues = getInputValues;
window.selectAdd = selectAdd;
window.selectContact = selectContact;
window.selectList = selectList;
window.removeBook = removeBook;