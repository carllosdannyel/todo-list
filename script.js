/* eslint-disable no-restricted-syntax */
const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btnAdd = document.getElementById('criar-tarefa');
const btnRemove = document.getElementById('apaga-tudo');

btnAdd.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  list.appendChild(li);
  input.value = null;
});

list.addEventListener('click', (event) => {
  const liClicket = list.children;
  const events = event.target;
  for (let li of liClicket) {
    li = li.classList.remove('grey');
  }
  events.classList.add('grey');
});

list.addEventListener('dblclick', (complet) => {
  const finished = complet.target;
  finished.classList.toggle('completed');
});

btnRemove.addEventListener('click', () => {
  const remove = document.querySelectorAll('li');
  for (let i = 0; i < remove.length; i += 1) {
    const index = remove[i];
    index.remove();
  }
});
