import Todo from './operation.js';

describe('Manipulate status and content updates', () => {
  document.body.innerHTML = '<div> <ul class="todo-list"></ul> </div>';

  const todo = new Todo();

  test('Clear all Completed', () => {
    todo.clearAll();
    expect(todo.tasks).toHaveLength(0);
  });

  test('Editing task Description', () => {
    todo.addTask('Test 3');
    todo.editTask(0, 'Test 4');
    expect(todo.tasks[0]?.description).toBe('Test 4');
  });
  
  test('Check task status', () => {
    todo.complete(0, true);
    expect(todo.tasks.at(0).completed).toBe(true);
  });
});
