/* eslint-disable no-plusplus */
import './style.css';

const displayList = document.querySelector('.todo-list');

const toDoList = [
  { description: 'wash the dishes', completed: false, index: 0 },
  { description: 'Clean the living room', completed: false, index: 1 },
  { description: 'Completed to do list project', completed: false, index: 2 },
];

const input = document.createElement('input');
input.placeholder = 'Add your list';
input.classList.add('input-design', 'design');
displayList.insertAdjacentElement('afterbegin', input);

const heading = document.createElement('h1');
heading.textContent = "Today's Todo";
heading.classList.add('heading', 'design');
displayList.insertAdjacentElement('afterbegin', heading);

for (let i = 0; i < toDoList.length; i++) {
  displayList.innerHTML += `
 <div class="check-div design"> 
 <input type="checkbox" id="list${toDoList[i]}" name="list${toDoList[i]}" value="list">
 <label for="list${toDoList[i]}">${toDoList[i].description}</label><br>
 </div>
 `;
}
const clear = document.createElement('p');
clear.textContent = 'Clear all Do list project';
clear.classList.add('clear');
displayList.insertAdjacentElement('beforeend', clear);
