class ToDo {
  constructor(toDo) {
    this.toDo = toDo;
    this.isDone = false;
  }

  changeState() {
    this.isDone = !this.isDone;
  }
}

class ToDoManager {
  constructor(toDoList = []) {
    this.toDoList = [...toDoList];
  }

  addItem(toDo) {
    const toDos = new ToDo(toDo);
    this.toDoList = [...this.toDoList, toDos];
  }

  setToDoList(toDoList) {
    this.toDoList = [...toDoList];
  }

  getTodoList() {
    return this.toDoList;
  }

  getItems() {
    this.toDoList.forEach((toDo, idx) => {
      console.log(`${idx + 1}. ${toDo.toDo}`);
    });
  }

  getLeftToDoCount() {
    const remain = this.toDoList.filter((toDo) => !toDo.isDone);
    console.log(`${remain.length}`);
  }
}
const toDoContainer = document.querySelector(".to-do-container");
const newTodo = toDoContainer.querySelector(".new-to-do");
const ulToDoList = toDoContainer.querySelector("#to-do-list");

const BASE_URL = "http://localhost:5000";

function displayToDoItem(toDoList) {
  const fragement = document.createDocumentFragment();
  if (!ulToDoList.childNodes.length) {
    toDoList.forEach((toDo) => {
      const li = document.createElement("li");
      li.dataset.id = `${toDo.id}`;
      li.insertAdjacentHTML(
        "afterbegin",
        `${toDo.toDo} <button>수정</button><button type='button' class='btn-del'>제거</button>`
      );
      fragement.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.dataset.id = `${toDoList[toDoList.length - 1].id}`;
    li.innerHTML = `${
      toDoList[toDoList.length - 1].toDo
    } <button>수정</button><button type='button' class='btn-del'>제거</button>`;
    fragement.appendChild(li);
  }
  ulToDoList.appendChild(fragement);
}

async function getToDoList() {
  try {
    const response = await fetch(`${BASE_URL}/toDo`);
    if (!response.ok) {
      console.error(`HTTP Error : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function postTodoitem(toDoItem) {
  try {
    const response = await fetch(`${BASE_URL}/toDo`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toDoItem),
    });
    const res = response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}
async function postTodoList(toDoList) {
  try {
    const changeFormat = { toDoList: toDoList };
    const response = await fetch(`${BASE_URL}/toDo`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changeFormat),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}

async function initTodoManager(todoManager) {
  const data = await getToDoList();
  await todoManager.setToDoList(data.toDoList);
  displayToDoItem(data.toDoList);
}

async function deleteTodoItem(id) {
  const url = new URL(`${BASE_URL}/toDo`);
  const params = {
    id: id,
  };

  url.search = new URLSearchParams(params).toString();
  await fetch(url, { method: "delete" });
}

ulToDoList.addEventListener("click", (e) => {
  let id = -1;
  if (
    e.target.nodeName === "BUTTON" &&
    e.target.classList.contains("btn-del")
  ) {
    id = e.target.parentNode.dataset.id;
    e.currentTarget.removeChild(e.target.parentNode);
    deleteTodoItem(id);
  }
});

newTodo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    todoManager.addItem(newTodo.value);
    postTodoitem(todoManager.getTodoList().slice(-1)[0]).then((res) =>
      console.log(res)
    );
    /*  postTodoList(todoManager.getTodoList()).then((res) => {
      displayToDoItem(res.toDoList);
      });*/
  }
});

async function updateToDoItem(toDoItem) {
  try {
    const response = await fetch(`${BASE_URL}/toDo`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toDoItem),
    });
    const res = await response.json();
  } catch (error) {
    console.error(error);
  }
}
const todoManager = new ToDoManager();
initTodoManager(todoManager);
