// 이전의 생성자 함수 방식
// function Robot(name) {
//     this.name = name;
// }
// Robot.prototype.sayYourName = function () {
//     console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
// }

// 클래스 문법
class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될 때 자동으로 실행됩니다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

class BasicRunner {
  constructor(name) {
    this.name = name;
    this.maxHp = 10;
    this.hp = 10;
    this.level = 1;
  }
  rest() {
    hp = maxHp;
  }
  running() {
    maxHp++;
    hp--;
    level++;
  }
}
