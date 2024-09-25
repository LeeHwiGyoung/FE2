class Todo {
  constructor(work) {
    this.work = work;
    this.isDone = false;
  }

  changeState() {
    this.isDone = !this.isDone;
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
    this.todoList.forEach((toDo, idx) => {
      console.log(`${idx + 1}. ${toDo.work}`);
    });
  }

  getLeftTodoCount() {
    const remain = this.todoList.filter((toDo) => !toDo.isDone);
    console.log(`${remain.length}`);
  }
}

const todoManager = new TodoManager();
