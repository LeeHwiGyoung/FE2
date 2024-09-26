class UserStorage {
  searchUser(userName, password, onSuccess, onError) {
    const requestObj = new XMLHttpRequest();
    requestObj.open("GET", "users.json");
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4 && requestObj.status === 200) {
        const userList = JSON.parse(requestObj.responseText);
        const user = userList.user.find((item) => {
          return item.userName === userName && item.password === password;
        });
        // 유저를 찾았을 경우
        if (user) {
          onSuccess(user.userName);
          //유저를 찾지 못했을 경우
        } else {
          onError(new Error("no user data"));
        }
      }
    };
    requestObj.send();
  }

  sayHi(name, onSuccess, onError) {
    const requestObj = new XMLHttpRequest();
    requestObj.open("GET", "greetings.json");
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4 && requestObj.status === 200) {
        const hiList = JSON.parse(requestObj.responseText);
        const userGreeting = hiList.greetings.find((item) => {
          return item.userName === name;
        });

        console.log(userGreeting);

        if (userGreeting) {
          onSuccess(userGreeting);
        } else {
          onError(new Error("no user greeing"));
        }
      }
    };
    requestObj.send();
  }
}

const userStorage = new UserStorage();

const userName = prompt("이름을 입력하세요");
const password = prompt("비밀번호를 입력하세요");

userStorage.searchUser(
  userName,
  password,
  (name) => {
    userStorage.sayHi(
      name,
      (greetingData) => {
        alert(
          `${greetingData.userName}이 당신에게 인사합니다! ${greetingData.greetings}`
        );
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
