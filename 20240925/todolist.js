class Todo {
  constructor(work) {
    this.work = work;
    this.done = false;
  }

  changeState() {
    this.done = !this.done;
  }
}

class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItem(work) {
    const toDo = new Todo(work);
    this.todoList = [...this.todoList, toDo];
  }

  getItems() {
    this.todoList.forEach((el, idx) => {
      console.log(`${idx + 1}. ${el.work}`);
    });
  }

  getLeftTodoCount() {
    console.log(`${this.todoList.filter((el) => !el.done).length}`);
  }
}

const todoManager = new TodoManager();
