class Todo {
  constructor(todo) {
    this.todo = todo;
    this.isDone = false;
  }

  changeState() {
    this.isDone = !this.isDone;
  }
}

class TodoManager {
  constructor(todoList = []) {
    this.todoList = [...todoList];
  }

  addItem(todo) {
    const toDo = new Todo(todo);
    this.todoList = [...this.todoList, toDo];
  }

  setToDoList(todoList) {
    this.todoList = [...todoList];
  }

  getTodoList() {
    return this.todoList;
  }

  getItems() {
    this.todoList.forEach((toDo, idx) => {
      console.log(`${idx + 1}. ${toDo.todo}`);
    });
  }

  getLeftTodoCount() {
    const remain = this.todoList.filter((toDo) => !toDo.isDone);
    console.log(`${remain.length}`);
  }
}

const todoContainer = document.getElementById("todolist");
const BASE_URL = "http://localhost:5000";

async function getTodoList() {
  try {
    const response = await fetch(`${BASE_URL}/todolist`);
    if (!response.ok) {
      console.error(`HTTP Error : ${response.status}`);
    }
    const data = await response.json();
    todoContainer.textContent = `${data.todoList}`;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function postTodoList(toDoList) {
  try {
    const changeFormat = { todoList: toDoList };
    const response = await fetch(`${BASE_URL}/todo`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changeFormat),
    });
    const res = await response.json();
    console.log("res:", res);
  } catch (error) {
    console.error(error);
  }
}

async function initTodoManager(todoManager) {
  const data = await getTodoList();
  todoManager.setToDoList(data.todoList);
}

const todoManager = new TodoManager();

initTodoManager(todoManager);
console.log(todoManager);

console.log(todoManager.getTodoList());

todoContainer.addEventListener("click", (e) => {
  todoManager.addItem("코딩하기");
  const todoList = todoManager.getTodoList();
  postTodoList(todoList);
});
