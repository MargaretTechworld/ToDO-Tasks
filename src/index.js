import './style.css';
import TodoTask from './modules/add.js';

const addList = document.querySelector('.add-list');
const clearall = document.querySelector('.clear');

const todo = new TodoTask();

document.addEventListener('DOMContentLoaded', () => {
  todo.loadFromLocalStorage();
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    todo.saveTasks();
    todo.addTasks();
    todo.addLabelEventListeners();
    todo.clearInput();
  }
});

addList.addEventListener('click', () => {
  todo.saveTasks();
  todo.addTasks();
  todo.addLabelEventListeners();
  todo.clearInput();
});

clearall.addEventListener('click', todo.clearTasks);
