import { addTasks, deleteTask } from "./util.js";


describe('add and remove functions', () => {
  test('add function', () => {
    document.body.innerHTML = `
      <div class='todo-list'>
      </div>
    `
    addTasks()
    const tasks = document.querySelectorAll('.todo-list .task');
    expect(tasks).toHaveLength(1)
  })
  
  test('remove', () => {
    const toDoList = [{
      description: 'sleep',
      completed: false,
      index: 1
    }]
    localStorage.setItem('tasks', JSON.stringify(toDoList))
    document.body.innerHTML = `
      <div class='todo-list'>
        <div class="task">
        </div>
      </div>
    `
    deleteTask(toDoList[0].index)
    const tasks = document.querySelectorAll('.todo-list .task');
    expect(tasks).toHaveLength(0)
  })
})