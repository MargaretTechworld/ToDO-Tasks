const addTasks = () => {
  const displayList = document.querySelector('.todo-list');
  const toDoList = [{description:'sleep',completed: false, index: 1}]
  localStorage.setItem('tasks', JSON.stringify(toDoList))
   displayList.innerHTML = toDoList.map((task, i) => `
    <div class="task" data-id="${i}">
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

};

const deleteTask = (id) => {
  const toDoList = JSON.parse(localStorage.getItem('tasks'))
  const index = toDoList.findIndex((task) => task.index === id);
  if (index !== -1) {
    toDoList.splice(index, 1);
    for (let i = 0; i < toDoList.length; i += 1) {
      toDoList[i].index = i + 1;
    }
    
    localStorage.setItem('tasks', JSON.stringify(toDoList))
    const displayList = document.querySelector('.todo-list');
   displayList.innerHTML = toDoList.map((task, i) => `
    <div class="task" data-id="${i}">
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
  }
}

export { addTasks, deleteTask }