class UserStorage {
  async searchUser(userName, password) {
    try {
      const response = await fetch("user.json");
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }
      const userList = await response.json();
      const user = userList.user.find((item) => {
        return item.userName === userName && item.password === password;
      });

      if (user) {
        return user.userName;
      } else {
        throw new Error("no user data");
      }
    } catch (error) {
      throw error;
    }
  }

  async sayHi(name) {
    try {
      const response = await fetch("greetings.json");
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }
      const hiList = await response.json();
      const userGreeting = hiList.greetings.find((item) => {
        return item.userName === name;
      });
      if (userGreeting) {
        return userGreeting;
      } else {
        throw new Error("no user greeting");
      }
    } catch (error) {
      throw error;
    }
  }
}

const userStorage = new UserStorage();

const userName = prompt("이름을 입력하세요");
const password = prompt("비밀번호를 입력하세요");
async function sayHello() {
  try {
    const result = await userStorage.searchUser(userName, password);
    const greetingData = await userStorage.sayHi(result);

    alert(
      `${greetingData.userName}이 당신에게 인사합니다! ${greetingData.greetings}`
    );
  } catch (error) {
    console.error(error);
  }
}

sayHello();
