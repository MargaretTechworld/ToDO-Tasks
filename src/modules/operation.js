import { getFromLocalStorage, setLocalStorage } from './local_storage.js';

export default class Todo {
    tasks;

    constructor() {
      this.tasks = getFromLocalStorage();
    }

    addTask = (disc) => {
      const task = {
        index: this.tasks.length,
        description: disc,
        completed: false,
      };
      this.tasks.push(task);
      setLocalStorage(this.tasks);
    };

    complete = (i, value) => {
      const task = this.tasks.find((task) => task.index === +i);
      task.completed = value;
      setLocalStorage(this.tasks);
    };

    clearAll = () => {
      const unCompletedTasks = this.tasks.filter(
        (task) => task.completed === false,
      );
      setLocalStorage(unCompletedTasks);
    };

    editTask = (i, value) => {
      const task = this.tasks.find((task) => task.index === +i);
      if (task) {
        task.description = value.trim();
      }
      setLocalStorage(this.tasks);
    };
}