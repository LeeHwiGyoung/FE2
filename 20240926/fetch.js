/* let result = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

result.then((data) => {
  console.log(data);
});
 */
class UserStorage {
  searchUser(userName, password) {
    return fetch("user.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ! Status : ${response.status}`);
        }
        return response.json();
      })
      .then((userList) => {
        const user = userList.user.find((item) => {
          return item.userName === userName && item.password === password;
        });
        if (user) {
          return user.userName;
        } else {
          throw new Error("no user data");
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  sayHi(name) {
    return fetch("greetings.json")
      .then((response) => {
        console.log("hi 실행됨");
        if (!response.ok) {
          throw new Error(`HTTP error ! Status : ${response.status}`);
        }
        return response.json();
      })
      .then((hiList) => {
        const userGreeting = hiList.greetings.find((item) => {
          return item.userName === name;
        });

        if (userGreeting) {
          return userGreeting;
        } else {
          throw new Error("no user greeting");
        }
      })
      .catch((error) => {
        throw error;
      });
  }
}

const userStorage = new UserStorage();

const userName = prompt("이름을 입력하세요");
const password = prompt("비밀번호를 입력하세요");

userStorage
  .searchUser(userName, password)
  .then((result) => userStorage.sayHi(result))
  .then((greetingData) =>
    alert(
      `${greetingData.userName}이 당신에게 인사합니다! ${greetingData.greetings}`
    )
  )
  .catch((error) => {
    console.error(error);
  });
