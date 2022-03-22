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
