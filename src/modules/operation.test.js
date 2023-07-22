import Todo from './operation.js';

describe('Manipulate status and content updates', () => {
  document.body.innerHTML = '<div> <ul class="todo-list"></ul> </div>';

  const todo = new Todo();

  test('Clear all Completed', () => {
    todo.clearAll();
    expect(todo.tasks).toHaveLength(0);
  });
});
