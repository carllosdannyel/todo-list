/* eslint-disable no-restricted-syntax */
const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btnAdd = document.getElementById('criar-tarefa');
const btnRemove = document.getElementById('apaga-tudo');
const btnRmFinished = document.getElementById('remover-finalizados');
const btnSaveTasks = document.getElementById('salvar-tarefas');
// const btnMoveUp = document.getElementById('mover-cima');
// const btnMoveDown = document.getElementById('mover-baixo');
const btnRemoveSelected = document.getElementById('remover-selecionado');

// Adiciona itens a lista de tarefas
function creatElement() {
  const li = document.createElement('li');
  if (input.value.length < 5) {
    alert('Por favor digite uma tarefa válida');
  } else {
    li.innerText = input.value;
    list.appendChild(li);
    input.value = null;
  }
}

// Adiciona cor de fundo cinza ao item da lista
function changeColor(event) {
  const liClicket = list.children;
  const events = event.target;
  for (let li of liClicket) {
    li = li.classList.remove('selected');
  }
  events.classList.add('selected');
}

// Adiciona um text decoration ao item, alternando entre classes
function addCompleted(complet) {
  const finished = complet.target;
  finished.classList.toggle('completed');
}

// Remove todos os itens da lista
function removeAllItens() {
  const remove = document.querySelectorAll('li');
  for (let i = 0; i < remove.length; i += 1) {
    const index = remove[i];
    index.remove();
  }
}

// Remove itens marcados como completados
function removeAllCompleted() {
  const liClicket = document.querySelectorAll('.completed');
  for (let li of liClicket) {
    li = li.remove();
  }
}

// salva no localStorage
function saveOnLocal() {
  const content = document.querySelectorAll('li');
  const arrayTasks = [];
  for (const index of content) {
    const tasks = {
      tarefa: '',
    };
    const text = index.innerText;
    tasks.tarefa = text;
    arrayTasks.push(tasks);
  }
  localStorage.setItem('Tarefas', JSON.stringify(arrayTasks));
}

// criar o elemento buscado do localStorage
// function createAndShowLocal(objeto) {
//   const li = document.createElement('li');
//   li.innerText = objeto.tarefa;
//   list.appendChild(li);
// }

// Move o item da lista selecionado para cima
// function moverUp() {
//   const li = document.querySelector('.selected');
//   list.moveUp.previusElement(li);
// }
// btnMoveUp.addEventListener('click', moverUp);

// Move o item da lista selecionado para baixo

// Executa a função somente quando a página foi totalmente carregada
// Verifica se existe algo salvo no localStorage
// Se sim, busca os elementos pelo laço de repetição e chama a função createAndShowLocal
// Por fim, pega cada index e atribui a função criando novas lis a partir do local storage

// remove o item selecionado
function removeSelected() {
  const li = document.querySelector('.selected');
  list.removeChild(li);
}
btnRemoveSelected.addEventListener('click', removeSelected);
// window.onload = () => {
//   const array = JSON.parse(localStorage.Tarefas);
//   if (array.length > 0) {
//     for (let index = 0; index < array.length; index += 1) {
//       const itens = array[index];
//       createAndShowLocal(itens);
//     }
//   }
// };

btnAdd.addEventListener('click', creatElement);
list.addEventListener('click', changeColor);
list.addEventListener('dblclick', addCompleted);
btnRemove.addEventListener('click', removeAllItens);
btnRmFinished.addEventListener('click', removeAllCompleted);
btnSaveTasks.addEventListener('click', saveOnLocal);
