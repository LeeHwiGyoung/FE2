class UserStorage {
  searchUser(userName, password, onSuccess, onError) {
    const requestObj = new XMLHttpRequest();
    requestObj.open("GET", "user.json");
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4 && requestObj.status === 200) {
        const userList = JSON.parse(requestObj.responseText);
        const user = userList.user.find((item) => {
          return item.userName === userName && item.password === password;
        });
        if (user) {
          onSuccess(user.userName);
        } else {
          onError(new Error("no user data"));
        }
      }
    };
    requestObj.send();
  }

  sayHi(userName) {
    const requestObj = new XMLHttpRequest();
    requestObj.open("GET", "greetings.json");
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4 && requestObj.status === 200) {
        const greetingList = JSON.parse(requestObj.responseText);
        const greeting = greetingList.greetings.find((item) => {
          return item.userName === userName;
        });
        console.log(greeting);
        /*   if (greeting) {
          onSuccess(greeting.greetings);
        } else {
          onError(new Error("no user data"));
        } */
      }
    };
    requestObj.send();
  }
}

const userStorage = new UserStorage();
const userName = prompt("이름을 입력하세요.");
const password = prompt("패스워드를 입력하세요.");

userStorage.searchUser(userName, password, (name) => userStorage.sayHi(name));
