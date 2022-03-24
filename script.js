const fatherOl = document.querySelector('ol');
const button = document.querySelector('button');
const input = document.querySelector('input');

function addElement() {
  const lis = document.createElement('li');
  lis.innerText = input.value;
  fatherOl.appendChild(lis);
  input.value = '';
}
button.addEventListener('click', addElement);

// adicona backgroundColor nas li clicadas
function changeColor(addGrey) {
  const addColor = addGrey.target;
  addColor.classList.add('grey');
}
fatherOl.addEventListener('click', changeColor);

function removeColor(rmGrey) {
  const techElement = document.querySelector('.grey');
  techElement.classList.remove('grey');
  rmGrey.target.classList.add('grey');
}
fatherOl.addEventListener('click', removeColor);

function doubleClicked(clicked) {
  const test = clicked.target;
  test.classList.add('completed');
}
fatherOl.addEventListener('dblclick', doubleClicked);

function doubleDesclicked(clicked) {
  const selectec = document.querySelector('.completed');
  selectec.classList.remove('grey');
  clicked.target.classList.add('grey');
}
fatherOl.addEventListener('dblclick', doubleDesclicked);
