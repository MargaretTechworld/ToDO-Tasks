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
  
})