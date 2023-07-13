const displayList = document.querySelector('.todo-list');

let toDoList = [];

class TodoTask {
  constructor(task, index = toDoList.length, description = false) {
    this.task = task;
    this.index = index;
    this.description = description;
  }

  saveTasks = () => {
    const inputList = document.querySelector('.input-design');
    const inputValue = inputList.value.trim();
    if (inputValue) {
      const pushVal = new TodoTask(inputValue, toDoList.length, false);
      toDoList.push(pushVal);
      inputList.value = '';
      this.saveToLocalStorage();
    }
  };

  addTasks = () => {
    displayList.innerHTML = '';
    for (let i = 0; i < toDoList.length; i += 1) {
      displayList.innerHTML += `
        <div class="design">
          <div class="icon-design">
            <div class="check-div design"> 
              <input type="checkbox" id="list${toDoList[i]}" name="list${toDoList[i]}" value="list" />
              <label for="list${toDoList[i]}">${toDoList[i].task}</label>
            </div>
            <div>
              <i class="fa-solid fa-ellipsis-vertical" data-index="${i}"></i>
              <i class="fa-solid fa-trash-can hidden"></i>
            </div>
          </div>
        </div>
      `;
    }
  };

  removeTask = (index) => {
    toDoList.splice(index, 1);
    this.updateIndexes();
    this.saveToLocalStorage();
  };

  updateIndexes = () => {
    for (let i = 0; i < toDoList.length; i += 1) {
      toDoList[i].index = i;
    }
  };

  saveToLocalStorage = () => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  };

  loadFromLocalStorage = () => {
    const toDoListJson = localStorage.getItem('toDoList');
    if (toDoListJson) {
      toDoList = JSON.parse(toDoListJson);
    }
  };
}

export default TodoTask;