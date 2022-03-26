const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btnAdd = document.getElementById('criar-tarefa');

btnAdd.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  list.appendChild(li);
  input.value = null;
});

list.addEventListener('click', (event) => {
  const liClicket = list.childNodes;
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
