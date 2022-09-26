const listTab = document.getElementById('listTab');
const addNewTab = document.getElementById('addNewTab');
const contactTab = document.getElementById('contactTab');

function selectList() {
  listTab.style.display = 'block';
  addNewTab.style.display = 'none';
  contactTab.style.display = 'none';
}
function selectAdd() {
  listTab.style.display = 'none';
  addNewTab.style.display = 'block';
  contactTab.style.display = 'none';
}
function selectContact() {
  listTab.style.display = 'none';
  addNewTab.style.display = 'none';
  contactTab.style.display = 'flex';
}
export { selectList, selectAdd, selectContact };