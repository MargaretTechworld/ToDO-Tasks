const displayList = document.querySelector('.todo-list');
const inputList = document.querySelector('.input-design');

let toDoList = [];

class TodoTask {
  constructor(task, index, completed = false) {
    this.task = task;
    this.index = index;
    this.completed = completed;
  }

  saveToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(toDoList));
  }

  loadFromLocalStorage = () => {
    const localStorageGet = JSON.parse(localStorage.getItem('tasks'));
    if (localStorageGet) {
      toDoList = localStorageGet.map((task, index) => new TodoTask(
        task.task, index, task.completed,
      ));
      this.addTasks();
      this.addLabelEventListeners();
    }
  }

  saveTasks = () => {
    const inputValue = inputList.value.trim();
    if (inputValue !== '') {
      const pushVal = new TodoTask(inputValue, toDoList.length + 1, false);
      toDoList.push(pushVal);
      this.saveToLocalStorage();
    }
  };

  clearInput = () => {
    inputList.value = '';
  }

 clearTasks = () => {
   toDoList = toDoList.filter((task) => !task.completed);
   displayList.innerHTML = '';
   localStorage.setItem('tasks', JSON.stringify(toDoList));
   this.addTasks();
 };

  deleteTask = (id) => {
    const index = toDoList.findIndex((task) => task.index === id);
    if (index !== -1) {
      toDoList.splice(index, 1);
      for (let i = 0; i < toDoList.length; i += 1) {
        toDoList[i].index = i + 1;
      }
      this.saveToLocalStorage();
      this.addTasks();
      this.addLabelEventListeners();
    }
  }

  addTasks = () => {
    displayList.innerHTML = toDoList.map((task, i) => `
      <div class="design" data-id="${i}">
        <div class="icon-design">
          <div class="check-div design"> 
            <input type="checkbox" class="check-completed" id="list${i + 1}" name="list${i + 1}" value="list" ${task.completed ? 'checked' : ''}/>
            <input type="text" class="label" value="${task.task}" data-index="${i}" />
          </div>
          <div class="align">
            <i class="fa-solid fa-ellipsis-vertical three-dots-${i} dots" data-index="${i}"></i>
            <i class="fa-solid fa-trash-can can-${i} cans hidden" data-id="${task.index}"></i>
          </div>
        </div>
      </div>
    `).join('');

    const deleteIcons = displayList.querySelectorAll('.fa-trash-can');
    deleteIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        const id = parseInt(icon.dataset.id, 10);
        this.deleteTask(id);
      });
    });

    const checkboxes = displayList.querySelectorAll('.check-completed');
    checkboxes.forEach((checkbox, i) => {
      checkbox.addEventListener('change', () => {
        toDoList[i].completed = checkbox.checked;
        this.saveToLocalStorage();
      });
    });
  };

  addLabelEventListeners = () => {
    const labels = displayList.querySelectorAll('.label');
    labels.forEach((label, i) => {
      label.addEventListener('focus', () => {
        const idToggle = label.dataset.index;
        displayList.querySelector(`.three-dots-${idToggle}`).classList.toggle('hidden');
        displayList.querySelector(`.can-${idToggle}`).classList.toggle('hidden');
      });

      label.addEventListener('blur', (() => {
        const index = i;
        return () => {
          const newTask = label.value.trim();
          if (newTask !== '') {
            toDoList[index].task = newTask;
            this.saveToLocalStorage();
          } else {
            label.value = toDoList[index].task;
          }
        };
      })());
    });
  };
}

export default TodoTask;