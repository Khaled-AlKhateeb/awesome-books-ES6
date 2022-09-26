const listTab = document.getElementById('listTab');
const addNewTab = document.getElementById('addNewTab');
const contactTab = document.getElementById('contactTab');

const selectList = () => {
  listTab.style.display = 'block';
  addNewTab.style.display = 'none';
  contactTab.style.display = 'none';
}
const selectAdd = () => {
  listTab.style.display = 'none';
  addNewTab.style.display = 'block';
  contactTab.style.display = 'none';
}
const selectContact = () => {
  listTab.style.display = 'none';
  addNewTab.style.display = 'none';
  contactTab.style.display = 'flex';
}
export { selectList, selectAdd, selectContact };