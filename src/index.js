import './style.css';
import TodoTask from './modules/add.js';

const addList = document.querySelector('.add-list');
const todo = new TodoTask();

window.addEventListener('load', () => {
  todo.loadFromLocalStorage();
  todo.addTasks();
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    todo.saveTasks();
    todo.addTasks();
  }
});

addList.addEventListener('click', () => {
  todo.saveTasks();
  todo.addTasks();
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-solid')
      && event.target.classList.contains('fa-ellipsis-vertical')) {
    const index = event.target.getAttribute('data-index');
    const ellipsisIcon = event.target;
    const trashIcon = event.target.nextElementSibling;
    ellipsisIcon.classList.toggle('hidden');
    trashIcon.classList.toggle('hidden');
    trashIcon.addEventListener('click', () => {
      todo.removeTask(index);
      todo.addTasks();
    });
  } else if (event.target.classList.contains('fa-solid')
             && event.target.classList.contains('fa-trash-can')
             && event.target.classList.contains('delete')) {
    const index = event.target.getAttribute('data-index');
    todo.removeTask(index);
    todo.addTasks();
  }
});